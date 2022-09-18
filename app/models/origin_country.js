const {
    DataTypes,
    Model
} = require('sequelize');
const {
    sequelize
} = require('../databases');

class OriginCountry extends Model {}

OriginCountry.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true
        },
    }
}, {
    sequelize,
    tableName: 'origin_country',
});

module.exports = OriginCountry;