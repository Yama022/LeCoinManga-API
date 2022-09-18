const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class RefreshToken extends Model { }

RefreshToken.init({
    token: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
},
{
  sequelize,
  tableName: 'refresh_token',
});

module.exports = RefreshToken;