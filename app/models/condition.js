const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Condition extends Model { }

Condition.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
},
{
  sequelize,
  tableName: 'condition',
});

module.exports = Condition;