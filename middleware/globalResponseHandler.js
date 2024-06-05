const globalResponseHandler = (req, res, next) => {
    res.success = (data, message = 'Success') => {
      res.status(200).json({
        status: 'success',
        message,
        data,
      });
    };
  
    res.error = (error, statusCode = 500) => {
      res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Internal Server Error',
      });
    };
  
    next();
  };
  
  module.exports = globalResponseHandler;
  