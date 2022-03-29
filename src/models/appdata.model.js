
const fs = require('fs');
const path = require('path');


const categoryModel = {
    readCategoriesAndBrands: function () {
        const categories = JSON.parse(
            fs.readFileSync(path.resolve("src/data/categories.JSON"))
        );
        const brands = JSON.parse(
            fs.readFileSync(path.resolve("src/data/brands.JSON"))
        )
        return [categories,brands];
    },
    readBrands: function () {
        const brands = JSON.parse(
            fs.readFileSync(path.resolve("src/data/brands.JSON"))
        );
        return products;
    },

} 

module.exports = categoryModel;


 