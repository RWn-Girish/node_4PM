const express = require('express');
const { subCategoryPage, getAllSubCategory, addSubCategory } = require('../controller/subCategory.controller');

const routes = express.Router();

routes.get("/add-subcategory", subCategoryPage);
routes.get("/view-subcategory", getAllSubCategory);

routes.post("/add-subcategory", addSubCategory);



module.exports = routes;