const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["institute", "donor", "supplier", "admin"], required: true },
    location: { type: String }, // For proximity-based features
    verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);