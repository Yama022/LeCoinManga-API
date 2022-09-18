const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Author extends Model { }

Author.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    japanese_name: {
        type: DataTypes.TEXT,
        unique: true
    },
    image_url: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true
        },
    }
},
{
  sequelize,
  tableName: 'author',
});

module.exports = Author;