const DB = require('../../../database/models');

const productController = {
	allProducts: (req, res) => {
		const reqCategory = DB.Category.findAll();
		const reqProduct = DB.Product.findAll();
		Promise.all([ reqCategory, reqProduct ])
			.then(([ category, product ]) => {
				res.json({
					data: {
						category,
						product
					},
					count: {
						category: category.length,
						product: product.length
					},
					status: 200
				})
			})
			.catch()
	},
};

module.exports = productController;

