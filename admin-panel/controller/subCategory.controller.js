const Category = require("../models/category.model");
const ExtraCategory = require("../models/extraCategory.model");
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


exports.deleteSubCategory = async (req, res) => {
  try {
    let subCateRec = await SubCategory.findById(req.params.id); 
    if(!subCateRec){
      req.flash("error", 'SubCategory is not found');
      return res.redirect("back");
    }else{
      await SubCategory.findByIdAndDelete(req.params.id)
      await ExtraCategory.deleteMany({subCategoryId: req.params.id})
      req.flash('success', 'Delete Subcategory Success!!');
      return res.redirect("/subcategory/view-subcategory");   
    }
    
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};
exports.editSubCategory = async (req, res) => {
  try {
    let subCateRec = await SubCategory.findById(req.params.id); 
    if(!subCateRec){
      req.flash("error", 'SubCategory is not found');
      return res.redirect("back");
    }else{
      let categories = await Category.find();
      return res.render("subcategory/edit_subcategory", { categories, subCateRec });   
    }
    
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    let subCateRec = await SubCategory.findById(req.params.id); 
    if(!subCateRec){
      req.flash("error", 'SubCategory is not found');
      return res.redirect("back");
    }else{
      await SubCategory.findByIdAndUpdate(subCateRec._id, req.body, {new: true})
      req.flash('success', 'Update Subcategory Success!!');
      return res.redirect("/subcategory/view-subcategory");
    }
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
}