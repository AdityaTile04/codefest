const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createNeed, getPendingNeeds } = require("../controllers/needController");

router.post("/", auth, createNeed);
router.get("/", getPendingNeeds);

module.exports = router;