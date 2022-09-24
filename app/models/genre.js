const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../databases");

class Genre extends Model {}

Genre.init(
  {
    mal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    is_nsfw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "genre",
  }
);

module.exports = Genre;
