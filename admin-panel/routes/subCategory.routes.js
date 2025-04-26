const express = require('express');
const { subCategoryPage, getAllSubCategory, addSubCategory,editSubCategory,updateSubCategory, deleteSubCategory } = require('../controller/subCategory.controller');

const routes = express.Router();

routes.get("/add-subcategory", subCategoryPage);
routes.get("/view-subcategory", getAllSubCategory);
routes.get("/edit-subcategory/:id", editSubCategory);
routes.get("/delete-subcategory/:id", deleteSubCategory);

routes.post("/add-subcategory", addSubCategory);
routes.post("/update-subcategory/:id", updateSubCategory);



module.exports = routes;