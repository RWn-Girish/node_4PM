const Category = require("../models/category.model");
const SubCategory = require("../models/subCatgegory.model");

exports.extraCategoryPage = async (req, res) => {
    try {
        let categories = await Category.find();
        let subCategories = await SubCategory.find();
        return res.render("extracategory/add_extracategory", { categories, subCategories });
      } catch (error) {
        console.log(error);
        return res.redirect("back");
      }
}