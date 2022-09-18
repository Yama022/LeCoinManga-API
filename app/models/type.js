const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Type extends Model { }

Type.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
},
{
  sequelize,
  tableName: 'type',
});

module.exports = Type;