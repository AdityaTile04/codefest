require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/needs", require("./routes/needs"));
app.use("/api/donations", require("./routes/donations"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/chat", require("./routes/chat"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectDB();
})