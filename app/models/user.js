const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class User extends Model { }

User.init({
    firstname: {
        type: DataTypes.TEXT,
    },
    lastname: {
        type: DataTypes.TEXT,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.NUMBER,
        unique: true,
        validate: {
            isNumeric: true,
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    avatar_url: {
        type: DataTypes.TEXT,
    },
    bio: {
        type: DataTypes.TEXT,
    },
    is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    is_phone_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    sequelize,
    tableName: 'user',
})

module.exports = User;