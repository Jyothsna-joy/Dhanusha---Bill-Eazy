const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const All = sequelize.define("All", {
  
 
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
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
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  usage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = All;
