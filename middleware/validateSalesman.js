const { body, validationResult } = require('express-validator');

const validateSalesman = [
  body('SalesmanName').notEmpty().withMessage('SalesmanName is required'),
  body('Email').isEmail().withMessage('Valid Email is required'),
  body('Number').isMobilePhone().withMessage('Valid Number is required'),
  body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('Region').notEmpty().withMessage('Region is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array();
      const error = new Error('Validation Error');
      error.statusCode = 400;
      error.errors = formattedErrors;
      
      return next(error);
    }
    next();
  }
];

module.exports = validateSalesman;
