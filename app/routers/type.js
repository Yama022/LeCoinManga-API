const express = require('express');
const router = express.Router();

const { typeController } = require('../controllers');

router.get('/', typeController.getAll);

module.exports = router;