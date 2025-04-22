const mongoose = require('mongoose');


const subCategoryShema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    subCategory: {
        type: String
    }
});

const SubCategory = mongoose.model("SubCategory", subCategoryShema);

module.exports = SubCategory;