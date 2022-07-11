const DB = require('../../../database/models');

const productController = {
	allProducts: (req, res) => {
		const reqProduct = DB.Product.findAll();
		Promise.all([reqProduct])
			.then(([product]) => {
				res.json({
					data: {
						product
					},
					count: {
						product: product.length,
						productLast: product[product.length - 1]
					},
					route: 'http://localhost:3001/img/products/',
					status: 200
				})
			})
			.catch()
	},
	detailProducts: (req, res) => {
		DB.Product.findByPk(req.params.id)
			.then((product) => {
				res.render("./products/productDet", {
					data: {
						product
					},
					status: 200
				})
			})
			.catch()
	},
	offersProducts: (req, res) => {
		DB.Product.findAll({
			where: {
				category: req.params.id
			}
		})
			.then((product) => {
				res.json({
					data: {
						product
					},
					status: 200
				})
			})
			.catch()
	},
};

module.exports = productController;
