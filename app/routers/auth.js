const express = require('express');
const router = express.Router();
const validate = require('../validations/validate');
const { JOI } = require('../constants');

const { authController } = require('../controllers');
const { authSchemas } = require('../validations/schemas');


router.post(
    '/register',
    validate(JOI.body, authSchemas.registerSchema),
    authController.register
);

router.post('/login', authController.login);

router.post('/refreshToken', authController.refreshToken);


module.exports = router;