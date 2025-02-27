const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createPaymentIntent, handleWebhook } = require("../controllers/paymentController");

router.post("/create-payment-intent", auth, createPaymentIntent);
router.post("/webhook", express.raw({ type: "application/json" }), handleWebhook);

module.exports = router;