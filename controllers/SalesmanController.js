const salesmanService = require("../services/Salesman");
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');

async function signup(req, res) {
  const { SalesmanName, Email,  Number, Password, Region } = req.body;
  console.log(req.body);
  if (req.user.Role !== 'admin') {
    const error = new Error("Unauthorized: Only admins can create salesmen");
    error.statusCode = 401;
    return next(error);
  }
  try {
    const existingSalesman = await salesmanService.findSalesmanByEmailOrNumber(Email, Number);
    console.log(existingSalesman);
    if (existingSalesman) {
      const error = new Error("Salesman already exists");
      error.statusCode = 400;
      return next(error);
    }

    const newSalesman = await salesmanService.createSalesman({
      SalesmanName,
      Email,
      Number,
      Password,
      Region,
    });
    console.log(newSalesman);
    res.success(newSalesman, "Salesman created successfully");
  } catch (error) {
    next(error);
  }
}

async function login(req, res) {
  const { EmployeeCode, Password } = req.body;

  try {
    const salesman = await salesmanService.findSalesmanByEmployeeCode(EmployeeCode);
    if (!salesman) {
      const error = new Error("Salesman not found");
      error.statusCode = 401;
      return next(error);
    }

    const isPasswordValid = await salesmanService.verifyPassword(Password, salesman.Password);
    if (!isPasswordValid) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      return next(error);
    }

    const token = jwt.sign({ EmployeeCode: salesman.EmployeeCode, Role: salesman.Role }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    res.setHeader("Authorization",`Bearer ${token}`)
    res.success(null, "Login successful");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup: asyncHandler(signup),
  login: asyncHandler(login)
};
