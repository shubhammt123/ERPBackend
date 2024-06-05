//connection

const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const tedious = require("tedious");

dotenv.config();
const DATABASE = "testesdee"
const USER = "esdee"
const PASSWORD = "Admin@123"
const SERVER = "esdee.database.windows.net"
const sequelize = new Sequelize(
  DATABSE,
  USER,
  PASSWORD,
  {
    host: SERVER,
    dialectModule: tedious,
    dialect: "mssql",
    dialectOptions :{
      options: {
        encrypt: true, // Use encryption
        requestTimeout: 30000, // 30 seconds
        connectTimeout: 30000, // 30 seconds
      }
    }
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
