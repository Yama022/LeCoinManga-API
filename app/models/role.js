const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../databases');

class Role extends Model { }

Role.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'role',
})

module.exports = Role;