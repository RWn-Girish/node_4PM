const Category = require("../models/category.model");

exports.subCategoryPage = async (req, res) => {
  try {
    let categories = await Category.find();
    return res.render("subcategory/add_subcategory", { categories });
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};
