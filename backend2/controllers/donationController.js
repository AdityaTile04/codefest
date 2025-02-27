// controllers/donationController.js
const Donation = require("../models/Donation");
const Need = require("../models/Need");

exports.createDonation = async (req, res) => {
    if (req.user.role !== "donor") return res.status(403).json({ msg: "Access denied" });

    const { needId, amount, items } = req.body;
    try {
        const need = await Need.findById(needId);
        if (!need || need.status !== "pending") return res.status(400).json({ msg: "Invalid need" });

        const donation = new Donation({
            donor: req.user.id,
            need: needId,
            amount,
            items,
        });
        await donation.save();
        res.json(donation);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};