const express = require('express');
const router = express.Router();

const { genreController } = require('../controllers');

router.get('/', genreController.getAll);

module.exports = router;