const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

exports.sendMessage = async (req, res) => {
    const { message } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant for Just Donate, a platform connecting donors, institutes, and suppliers. Answer questions about donations, needs, or the platform." },
                { role: "user", content: message },
            ],
            max_tokens: 150,
        });

        const reply = completion.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error("LLM Error:", error);
        res.status(500).json({ msg: "Failed to process message" });
    }
};