const productModel = require('../models/product.model');

const { readCategoriesAndBrands } = require('../models/appdata.model');
const [ categories, brands ] = readCategoriesAndBrands();

const adminController = {
	adminController:(req, res) => {
		const products = productModel.read();
		const title = "Administrador de productos";
		//const user = req.session.userLogged;
		res.render('./admin/adminProductMain', { categories, brands, products, title });
	}
}

module.exports = adminController;
