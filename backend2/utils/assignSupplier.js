const User = require("../models/User");

const assignSupplier = async () => {
    try {
        // Simple rotation: Pick a random supplier (improve with real logic)
        const suppliers = await User.find({ role: "supplier" });
        if (!suppliers.length) throw new Error("No suppliers available");

        const randomIndex = Math.floor(Math.random() * suppliers.length);
        return suppliers[randomIndex];
    } catch (error) {
        throw new Error("Failed to assign supplier: " + error.message);
    }
};

module.exports = { assignSupplier };