const Category = require("../models/category.model");
const ExtraCategory = require("../models/extraCategory.model");
const SubCategory = require("../models/subCatgegory.model");

exports.getAllExtraCategory = async (req, res) => {
    try {
        let extraCategories = await ExtraCategory.find().populate('categoryId').populate('subCategoryId');
        return res.render("extracategory/view_extracategory", { extraCategories });
      } catch (error) {
        console.log(error);
        return res.redirect("back");
      }
}
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


exports.addExtraCategory = async (req, res) => {
  try {
      let extraCate = await ExtraCategory.create(req.body);
      if(extraCate){
        req.flash("success", "New Extra Category Added");
        return res.redirect("back");
      }else{
        req.flash("error", "Something Wrong!!!!");
        return res.redirect("back");
      }
    } catch (error) {
      console.log(error);
      return res.redirect("back");
    }
}

exports.deleteExtraCategory = async (req, res) => {
  try {
      let extraCate = await ExtraCategory.findById(req.parmas.id);
      if(extraCate){
        await ExtraCategory.findByIdAndDelete(req.params.id);
        req.flash("success", "Extra Category Delete Success");
        return res.redirect("back");
      }else{
        req.flash("error", "Extra Category Not Found");
        return res.redirect("back");
      }
    } catch (error) {
      console.log(error);
      return res.redirect("back");
    }
}


exports.editExtraCategory = async (req, res) => {
  try {
    let extraCateRec = await ExtraCategory.findById(req.parmas.id);
      if(extraCateRec){
        let categories = await Category.find();
        let subCategories = await SubCategory.find();
      return res.render("extracategory/edit_extracategory", { categories, subCategories, extraCateRec });
      }else{
        req.flash("error", "Extra Category Not Found");
        return res.redirect("back");
      }
    } catch (error) {
      console.log(error);
      return res.redirect("back");
    }
}


exports.updateExtraCategory = async (req, res) => {
  try {
    let extraCateRec = await ExtraCategory.findById(req.parmas.id);
      if(extraCateRec){
        await ExtraCategory.findByIdAndUpdate(req.params.id, req.body, {new: true});
        req.flash("success", "Extra Category Update Success");
        return res.redirect("/extracategory/view-extracategory")
      }else{
        req.flash("error", "Extra Category Not Found");
        return res.redirect("back");
      }
    } catch (error) {
      console.log(error);
      return res.redirect("back");
    }
}