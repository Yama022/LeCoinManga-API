const SEQUELIZE = require('./sequelize');
const DATA = require('./data');
const ERROR = require('./error');
const SUCCESS = require('./success');
const JOI = require('./joi');


module.exports = {
    SEQUELIZE,
    DATA,
    ERROR,
    SUCCESS,
    JOI,
    BCRYPT: {
        SALT_ROUNDS: 10,
    },
};