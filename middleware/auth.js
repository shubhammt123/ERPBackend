const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const error = new Error("Authentication token required");
        error.statusCode = 401;
        return next(error);
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            const error = new Error("Invalid or expired token");
            error.statusCode = 401;
            return next(error);
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
