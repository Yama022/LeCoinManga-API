const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(100).required(),
    confirm: Joi.string().valid(Joi.ref('password')).required(),
});

const authSchemas = {
    registerSchema
}

module.exports = authSchemas;