const express = require('express');
const { extraCategoryPage, addExtraCategory, getAllExtraCategory, deleteExtraCategory, updateExtraCategory, editExtraCategory } = require('../controller/extraCategory.controller');

const routes = express.Router();

routes.get("/add-extracategory", extraCategoryPage);
routes.get("/view-extracategory", getAllExtraCategory);
routes.get("/delete-extracategory/:id", deleteExtraCategory);
routes.get("/edit-extracategory/:id", editExtraCategory);

routes.post("/add-extracategory", addExtraCategory);
routes.post("/update-subcategory/:id", updateExtraCategory);



module.exports = routes;