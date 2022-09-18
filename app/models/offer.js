const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Offer extends Model { }

Offer.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 10000,
        },
    },
    chapter_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_sold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
},
{
  sequelize,
  tableName: 'offer',
});

module.exports = Offer;