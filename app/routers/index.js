const express = require("express");
const router = express.Router();

// Another routers
const mainRouter = require("./main");
const authRouter = require("./auth");
const genreRouter = require("./genre");
const errorRouter = require("./error");

// Base routes
router.use("/", mainRouter);

// Authentication routes
router.use("/auth", authRouter);

// Genre routes
router.use("/genre", genreRouter);

// Error Handling
router.use(errorRouter);

module.exports = router;
