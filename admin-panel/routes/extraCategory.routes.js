const express = require('express');
const { extraCategoryPage } = require('../controller/extraCategory.controller');

const routes = express.Router();

routes.get("/add-extracategory", extraCategoryPage);
// routes.get("/view-subcategory", getAllSubCategory);

// routes.post("/add-subcategory", addSubCategory);



module.exports = routes;