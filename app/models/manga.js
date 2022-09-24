const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Manga extends Model { }

Manga.init({
    mal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    japanese_name: {
        type: DataTypes.TEXT,
        unique: true
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    background: {
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
    finish_date: {
        type: DataTypes.DATE,
        validate: {
            isDate: true
        }
    },
    volumes_number: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    chapters_number: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    mal_rank: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
},
{
  sequelize,
  tableName: 'manga',
});

module.exports = Manga;