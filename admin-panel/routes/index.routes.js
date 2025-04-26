const express = require('express');
const routes = express.Router();
const passport = require('passport');
const {dashBoard, loginPage, loginAdmin, logout, forgotPasswordPage, sendEmail, verifyOTP, resetPassword, changePasswordPage, changePassword} = require("../controller/index.controller");


//user routes
routes.use("/user", require("./user.routes"))


// admin routes
routes.get("/", loginPage);
routes.get("/dashboard", passport.checkAuthenticat, dashBoard);

routes.post("/login", passport.authenticate('local', {failureRedirect: "/"}), loginAdmin);
routes.get("/logout", logout);
routes.get("/profile", logout);
routes.get("/change-password", changePasswordPage);
routes.post("/change-password", changePassword);


routes.get("/forgotPassword", forgotPasswordPage);
routes.post("/sendEmail", sendEmail);
routes.post("/verify-otp", verifyOTP);
routes.post("/reset-password", resetPassword);

routes.use("/admin", passport.checkAuthenticat, require('./admin.routes'))
routes.use("/category", passport.checkAuthenticat, require('./category.routes'))
routes.use("/subcategory", passport.checkAuthenticat, require('./subCategory.routes'))
routes.use("/extracategory", passport.checkAuthenticat, require('./extraCategory.routes'))
routes.use("/product", passport.checkAuthenticat, require('./product.routes'))


module.exports = routes;