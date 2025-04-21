const Category = require("../models/category.model");
const path = require('path');
const fs = require('fs');

exports.getAllCategory = async (req, res) => {
    try {
        let categoires = await Category.find();
        return res.render("category/view_category", {categoires})
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}
exports.categoryPage = async (req, res) => {
    try {
        return res.render("category/add_category")
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}



exports.addCategory = async (req, res) => {
    try {
        let imagePath = "";
        if(req.file){
            imagePath = `/uploads/${req.file.filename}`;
        }
        req.body.categoryImage = imagePath;
        let newCategory = await Category.create(req.body);

        if(newCategory){
            req.flash("success", "New Category Added");
            return res.redirect("back");
        }else{
            req.flash("error", "Somthing Wrong!!!");
            return res.redirect("back");
        }

    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}


exports.deleteCategory = async (req, res) => {
    try {
        let id = req.params.id;
        let categoryRec = await Category.findById(id);
        if(!categoryRec){
            req.flash("error", "Category is not Found");
            return res.redirect("back");
        }else{
            if(categoryRec.categoryImage != ""){
                let imagePath = path.join(__dirname, "..", categoryRec.categoryImage);
                try{
                    await fs.unlinkSync(imagePath);
                }catch(err){
                    console.log("File Missing...");
                }
            }
            await Category.findByIdAndDelete(id);
            req.flash("success", "Category Delete Success");
            return res.redirect("back");
        }
        
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}


exports.editCategory = async (req, res) => {
    try {
        let id = req.params.id;
        let categoryRec = await Category.findById(id);
        if(!categoryRec){
            req.flash("error", "Category is not Found");
            return res.redirect("back");
        }else{
            return res.render("category/edit_category", {categoryRec});
        }
    } catch (error) {
        console.log(error);
        return res.redirect("back");
    }
}