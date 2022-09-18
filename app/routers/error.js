const express = require('express');
const router = express.Router();

const {
    ERROR: {
        CONTENT_NOT_FOUND
    },
} = require('../constants');

router.use((_, res) => {
    res.status(404).json({
        message: CONTENT_NOT_FOUND
    });
});

module.exports = router;