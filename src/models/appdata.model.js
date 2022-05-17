const { readFileSync } = require('fs');
const { resolve } = require('path');

const categoryModel = {
    readCategoriesAndBrands: function () {
        const categoriesFileJson = resolve('./src/data/categories.json');
        const categories = JSON.stringify(readFileSync(categoriesFileJson));
        
        const brandsFileJson = resolve('./src/data/brands.json');
        const brands = JSON.stringify(readFileSync(brandsFileJson));
        
        return [ categories, brands ];
    }
}

module.exports = categoryModel;
