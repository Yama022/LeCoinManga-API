const express = require('express');
const router = express.Router();

// Another routers
const mainRouter = require('./main');
const authRouter = require('./auth');
const errorRouter = require('./error');

// Base routes
router.use('/', mainRouter);

// Authentication routes
router.use('/auth', authRouter);

// Error Handling
router.use(errorRouter);

module.exports = router;