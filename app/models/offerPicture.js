const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class OfferPicture extends Model { }

OfferPicture.init({
    image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true
        }
    }
},
{
  sequelize,
  tableName: 'offer_picture',
});

module.exports = OfferPicture;