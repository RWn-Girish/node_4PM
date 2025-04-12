const express = require('express');
const routes = express.Router();
const passport = require('passport');
const {dashBoard, loginPage, loginAdmin, logout, forgotPasswordPage, sendEmail, verifyOTP, changePassword} = require("../controller/index.controller");

routes.get("/", loginPage);
routes.get("/dashboard", passport.checkAuthenticat, dashBoard);

routes.post("/login", passport.authenticate('local', {failureRedirect: "/"}), loginAdmin);
routes.get("/logout", logout);
routes.get("/profile", logout);

routes.get("/forgotPassword", forgotPasswordPage);
routes.post("/sendEmail", sendEmail);
routes.post("/verify-otp", verifyOTP);
routes.post("/change-password", changePassword);

routes.use("/admin", passport.checkAuthenticat, require('./admin.routes'))


module.exports = routes;