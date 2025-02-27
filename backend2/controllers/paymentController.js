const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Donation = require("../models/Donation");
const Need = require("../models/Need");
const Order = require("../models/Order");
const User = require("../models/User");
const { assignSupplier } = require("../utils/assignSupplier");

exports.createPaymentIntent = async (req, res) => {
    const { donationId } = req.body;
    try {
        const donation = await Donation.findById(donationId);
        if (!donation || donation.donor.toString() !== req.user.id)
            return res.status(400).json({ msg: "Invalid donation" });

        const amount = donation.amount * 100; // Stripe uses cents
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            metadata: { donationId: donationId.toString() },
        });

        donation.paymentIntentId = paymentIntent.id;
        await donation.save();

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ msg: "Payment error" });
    }
};

exports.handleWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = "your_stripe_webhook_secret"; // From Stripe Dashboard

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        const donationId = paymentIntent.metadata.donationId;

        const donation = await Donation.findById(donationId);
        donation.status = "paid";
        await donation.save();

        const need = await Need.findById(donation.need);
        need.status = "funded";
        await need.save();

        const supplier = await assignSupplier(); // Use utility function
        const order = new Order({
            donation: donationId,
            supplier: supplier._id,
            items: donation.items || need.items,
        });
        await order.save();
    }

    res.json({ received: true });
};