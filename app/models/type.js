const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Type extends Model { }

Type.init({
  label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  is_nsfw: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
},
{
  sequelize,
  tableName: 'type',
});

module.exports = Type;