const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { sendMessage } = require("../controllers/chatController");

router.post("/", auth, sendMessage);

module.exports = router;