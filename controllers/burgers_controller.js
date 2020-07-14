const express = require("express");
const router = express.Router();

// Import the model to use its database functions.
const burger = require("../models/burger.js");

// Routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

// Export routes
module.exports = router;
