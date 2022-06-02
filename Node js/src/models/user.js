const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  
  roles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
