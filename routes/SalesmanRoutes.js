const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/auth');
const validateSalesman = require('../middleware/validateSalesman');

const { signup , login } = require("../controllers/SalesmanController");

router.post("/signup", verifyToken, validateSalesman, signup);
router.post("/login", login);
// router.get("/get_users", HandleGetUser);
// router.post("/delete_user/:id", HandleDeleteUser);

module.exports = router;
