const express = require("express");
const router = express.Router();

// Another routers
const mainRouter = require("./main");
const authRouter = require("./auth");
const genreRouter = require("./genre");
const mangaRouter = require("./manga");
const errorRouter = require("./error");

// Base routes
router.use("/", mainRouter);

// Authentication routes
router.use("/auth", authRouter);

// Genre routes
router.use("/genre", genreRouter);

// Manga routes
router.use("/manga", mangaRouter);

// Error Handling
router.use(errorRouter);

module.exports = router;
