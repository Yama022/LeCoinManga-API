const express = require('express');
const router = express.Router();

// Another routers
const mainRouter = require('./main');
const authRouter = require('./auth');
const typeRouter = require('./type');
const errorRouter = require('./error');

// Base routes
router.use('/', mainRouter);

// Authentication routes
router.use('/auth', authRouter);

// Type routes
router.use('/type', typeRouter);

// Error Handling
router.use(errorRouter);

module.exports = router;