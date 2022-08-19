const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Usage = sequelize.define("Usage", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  usage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buildingname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buildingno: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Usage;
