const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const getAllApi=require("./getall");
const getSingleUserApi=require("./getSingleUser");
const updateUserApi=require('./updateUser');
const deleteUserApi=require('./deleteUser');

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(getAllApi);
router.use(getSingleUserApi);
router.use(updateUserApi);
router.use(deleteUserApi);

module.exports = router;
