const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Manga extends Model { }

Manga.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    japanese_name: {
        type: DataTypes.TEXT,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
    },
    image_url: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true
        }
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
},
{
  sequelize,
  tableName: 'manga',
});

module.exports = Manga;