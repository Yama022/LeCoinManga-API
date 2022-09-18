const SEQUELIZE = require('./sequelize');
const DATA = require('./data');
const ERROR = require('./error');
const SUCCESS = require('./success');
const JOI = require('./joi');
const TOKEN = require('./token');

module.exports = {
    SEQUELIZE,
    DATA,
    ERROR,
    SUCCESS,
    JOI,
    TOKEN,
    BCRYPT: {
        SALT_ROUNDS: 10,
    },
};