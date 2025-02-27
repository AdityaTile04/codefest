const Need = require("../models/Need");
const { OpenAI } = require("openai");
const { validateNeedItems } = require("../utils/validate");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

exports.createNeed = async (req, res) => {
    if (req.user.role !== "institute") return res.status(403).json({ msg: "Access denied" });

    const { items } = req.body;

    // Validate input
    if (!validateNeedItems(items)) return res.status(400).json({ msg: "Invalid items" });

    try {
        // Analyze need for fraud using LLM
        const description = items.map((i) => `${i.quantity} ${i.itemName}`).join(", ");
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an analyst for Just Donate. Check if this need description sounds suspicious or excessive. Return 'clean' if it seems normal, or 'suspicious' with a reason if not.",
                },
                { role: "user", content: description },
            ],
            max_tokens: 100,
        });

        const analysis = completion.choices[0].message.content;
        if (analysis !== "clean") {
            return res.status(400).json({ msg: "Need flagged as suspicious: " + analysis });
        }

        // If clean, save the need
        const need = new Need({ institute: req.user.id, items });
        await need.save();
        res.json(need);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};

exports.getPendingNeeds = async (req, res) => {
    try {
        const needs = await Need.find({ status: "pending" }).populate("institute", "name location");
        res.json(needs);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};