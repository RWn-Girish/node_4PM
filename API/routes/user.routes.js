const express = require("express");
const { getAllUsers, addNewUser, getUser, updateUser, deleteUser } = require("../controllers/user.controller");
const uploadImage = require("../middleware/uploadImage");

const routes = express.Router();

routes.post("/add-user", uploadImage.single('profileImage'), addNewUser);
routes.get("/", getAllUsers);
routes.get("/single-user/:id", getUser);
routes.put("/update-user/:id", updateUser);
routes.delete("/delete-user/:id", deleteUser);

module.exports = routes;