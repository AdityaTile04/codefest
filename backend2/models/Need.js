const mongoose = require("mongoose");

const needSchema = new mongoose.Schema({
  institute: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ itemName: String, quantity: String }],
  status: { type: String, enum: ["pending", "funded", "delivered"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Need", needSchema);