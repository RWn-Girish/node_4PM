const express = require("express");
const uploadImage = require("../middleware/uploadImage.js");
const { addNewUser, loginUser } = require("../controllers/user.controller.js");
const { verifyUserToken } = require("../middleware/verfiyToken.js");

const routes = express.Router();

routes.post("/register", uploadImage.single('profileImage'), addNewUser);
routes.post("/login",  loginUser);

routes.use("/user", verifyUserToken, require("./user.routes.js"))

module.exports = routes;