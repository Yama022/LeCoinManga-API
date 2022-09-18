const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    token: {
        generateAccessToken,
        generateRefreshToken
    },
} = require('../utils');

const {
    Op
} = require("sequelize");

const {
    User,
    RefreshToken
} = require("../models");

const {
    ERROR: {
        PASSWORD_CONFIRMATION_MISMATCH,
        EMAIL_ALREADY_EXISTS,
        USERNAME_ALREADY_EXISTS,
        INTERNAL,
        INVALID_EMAIL,
        INVALID_PASSWORD
    },
    BCRYPT: {
        SALT_ROUNDS: saltRounds
    },
    SUCCESS: {
        SIGNED_UP,
        SIGNED_IN
    },
} = require("../constants");

module.exports = {
    register: async (req, res) => {
        try {
            const {
                email,
                username,
                password,
                confirm
            } = req.body;

            // If the password and the confirmation are different, the request is blocked
            if (password !== confirm) {
                return res.status(400).json({
                    error: PASSWORD_CONFIRMATION_MISMATCH,
                });
            }

            // If the email already exists, the request is blocked
            const userWithEmail = await User.findOne({
                where: {
                    email,
                },
            });

            if (userWithEmail) {
                return res.status(409).json({
                    error: EMAIL_ALREADY_EXISTS,
                    code: "EMAIL_ALREADY_EXISTS",
                });
            }

            // If the username already exists, the request is blocked
            const userWithUsername = await User.findOne({
                where: {
                    username,
                },
            });

            if (userWithUsername) {
                return res.status(409).json({
                    error: USERNAME_ALREADY_EXISTS,
                    code: "USERNAME_ALREADY_EXISTS",
                });
            }

            // We hash the password before saving it
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // We create a new instance of the User class
            const createdUser = await User.create({
                email,
                username,
                password: hashedPassword,
            });

            // We send a success response to the client
            return res.status(201).json({
                message: SIGNED_UP,
                data: createdUser,
            });

        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
            res.status(500).json({
                message: INTERNAL,
                error: err.message,
            });
        }
    },
    login: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;

            // We find the user in the database
            const user = await User.findOne({
                where: {
                    email: {
                        [Op.iLike]: email,
                    },
                },
            });

            // If the user does not exist, the request is blocked
            if (!user) {
                return res.status(400).json({
                    error: INVALID_EMAIL,
                    code: 'INVALID_EMAIL',
                });
            }

            // If the password is incorrect, the request is blocked
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
                return res.status(400).json({
                    error: INVALID_PASSWORD,
                    code: 'INVALID_PASSWORD',
                });
            }

            const accessToken = generateAccessToken(user.id);
            const refreshToken = generateRefreshToken(user.id);

            await RefreshToken.create({
                user_id: user.id,
                token: refreshToken,
            });

            // We send a success response to the client
            res.status(200).json({
                message: SIGNED_IN,
                data: {
                    accessToken,
                    refreshToken,
                    user,
                },
            });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
            res.status(500).json({
                message: INTERNAL,
                error: err.message,
            });
        }
    },
    refreshToken: async (req, res) => {}
};