const productModel = require('../models/product.model');
//const db = require('../../database/models')

const { readCategoriesAndBrands } = require('../models/appdata.model');
const [categories, brands] = readCategoriesAndBrands();

const adminController = {
	adminController: (req, res) => {
		const products = productModel.read();
		const title = "Administrador de productos";
		res.render('./admin/adminProductMain', { categories, brands, products, title });
	}
}
module.exports = adminController;
/*db.Category.findAll().then(function(category){
			res.render('./admin/adminProductMain', {categories, brands, products, title, category:category});
		}) */
