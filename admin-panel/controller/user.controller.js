const Category = require("../models/category.model");
const Product = require("../models/product.model");

exports.indexPage = async (req, res) => {
  try {
    let allCategories = await Category.find();
    let allProducts = await Product.find()
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("extracategoryId");
    return res.render("user/index", { allProducts, allCategories });
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};

exports.getProductDetail = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id)
      .populate("categoryId")
      .populate("subcategoryId")
      .populate("extracategoryId");
    return res.render("user/single-product", { product });
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};
