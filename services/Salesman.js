const { Salesman } = require("../models/SalesmanSchema");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

async function findSalesmanByEmployeeCode(EmployeeCode) {
  return await Salesman.findOne({ where: { EmployeeCode } });
}

async function findSalesmanByEmailOrNumber(email, number) {
  return await Salesman.findOne({
    where: {
      [Sequelize.Op.or]: [{ Email: email }, { Number: number }]
    }
  });
}

async function createSalesman(salesmanData) {
  
  const hashedPassword = await bcrypt.hash(salesmanData.Password, 10);
  salesmanData.Password = hashedPassword;
  const temporaryEmployeeCode = String(Math.random());
  salesmanData.EmployeeCode = temporaryEmployeeCode;

  
  const newSalesman = await Salesman.create(salesmanData);

  
  const employeeCode = `EMP-${newSalesman.SalesmanID.toString().padStart(3, '0')}`;
 console.log(employeeCode);
  await newSalesman.update({ EmployeeCode: employeeCode });

  return newSalesman;
}

async function verifyPassword(inputPassword, storedPassword) {
  return await bcrypt.compare(inputPassword, storedPassword);
}

module.exports = {
  findSalesmanByEmployeeCode,
  createSalesman,
  verifyPassword,
  findSalesmanByEmailOrNumber
};
