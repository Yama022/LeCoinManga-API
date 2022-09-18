const jwt = require('jsonwebtoken');

const {
    ERROR: {
        INVALID_TOKEN
    },
    TOKEN: {
        REFRESH_MAX_AGE: refreshMaxAge,
        ACCESS_MAX_AGE: accessMaxAge
    },
} = require('../constants');

module.exports = {
    generateAccessToken: (id) =>
        jwt.sign({
            id
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: accessMaxAge,
        }),
    generateRefreshToken: (id) =>
        jwt.sign({
            id
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: refreshMaxAge,
        }),
    verifyAccessToken: (token, callback) =>
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return callback({
                    message: INVALID_TOKEN
                }, null);
            }
            return callback(null, decoded);
        }),
    verifyRefreshToken: (token, callback) =>
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return callback({
                    message: INVALID_TOKEN
                }, null);
            }
            return callback(null, decoded);
        }),
};