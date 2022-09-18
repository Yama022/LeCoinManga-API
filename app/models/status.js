const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Status extends Model { }

Status.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
},
{
  sequelize,
  tableName: 'status',
});

module.exports = Status;