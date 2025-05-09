const express = require("express");
const { getAllUsers, getUser, updateUser, deleteUser, profile } = require("../controllers/user.controller");

const routes = express.Router();

routes.get("/",  getAllUsers);
routes.get("/my-profile", profile);
routes.get("/single-user/:id",  getUser);
routes.put("/update-user/:id", updateUser);
routes.delete("/delete-user/:id", deleteUser);

module.exports = routes;


/*
    1. Update profile
    2. Change Password
    3. Delete Account
*/