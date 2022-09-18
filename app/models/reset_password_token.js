const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class ResetPasswordToken extends Model { }

ResetPasswordToken.init({
    token: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
},
{
  sequelize,
  tableName: 'reset_password_token',
});

module.exports = ResetPasswordToken;