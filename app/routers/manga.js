const express = require("express");
const router = express.Router();

const { mangaController } = require("../controllers");

router.get("/", mangaController.getAllMangasWithFilter);

module.exports = router;
