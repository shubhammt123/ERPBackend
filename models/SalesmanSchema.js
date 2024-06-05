const sequelize = require("../database/Connection");
const { DataTypes } = require("sequelize");

const Salesman = sequelize.define("Salesman", {
  SalesmanID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  SalesmanName: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  EmployeeCode: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Number: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Region: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "salesman",
  },
});

module.exports = {
  Salesman,
};
