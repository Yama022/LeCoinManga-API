const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    Op
} = require("sequelize");

const {
    User
} = require("../models");

const {
    ERROR: {
        PASSWORD_CONFIRMATION_MISMATCH,
        EMAIL_ALREADY_EXISTS,
        USERNAME_ALREADY_EXISTS,
        INTERNAL,
        // INVALID_EMAIL,
        // INVALID_PASSWORD,
        // MISSING_FIELDS_FOR_RESTAURANT,
        // MUST_VERIFY_EMAIL,
    },
    BCRYPT: {
        SALT_ROUNDS: saltRounds
    },
    SUCCESS: {
        SIGNED_UP, // SIGNED_IN
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
    },
    refreshToken: async (req, res) => {
    }
};