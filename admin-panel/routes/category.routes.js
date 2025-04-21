const express = require('express');
const { categoryPage, getAllCategory, addCategory, deleteCategory, editCategory } = require('../controller/category.controller');
const Category = require('../models/category.model');
const routes = express.Router();

routes.get("/add-category", categoryPage);
routes.get("/view-category", getAllCategory);
routes.get("/delete-category/:id", deleteCategory);
routes.get("/edit-category/:id", editCategory);

routes.post("/add-category", Category.uploadImage, addCategory);



module.exports = routes;