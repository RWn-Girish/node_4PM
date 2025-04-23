const Category = require("../models/category.model");
const SubCategory = require("../models/subCatgegory.model");

exports.subCategoryPage = async (req, res) => {
  try {
    let categories = await Category.find();
    return res.render("subcategory/add_subcategory", { categories });
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};

exports.getAllSubCategory = async (req, res) => {
  try {
    let subCategories = await SubCategory.find().populate('categoryId');
    // console.log(subCategories);
    return res.render("subcategory/view_subcategory", {subCategories});
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};


exports.addSubCategory = async (req, res) => {
  try {
    let subCategory = await SubCategory.create(req.body);
    if(subCategory){
      req.flash('success', 'New Subcategory Added!!');
      return res.redirect("back")
    }else{
      req.flash('error', 'Something Wrong!!!');
      return res.redirect("back")
    }
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
}