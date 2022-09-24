const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Author extends Model { }

Author.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    mal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
},
{
  sequelize,
  tableName: 'author',
});

module.exports = Author;