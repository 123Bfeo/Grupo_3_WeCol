const DB = require('../../../database/models');

const brandApiController = {
	allBrands: (req, res) => {
		const reqBrand = DB.Brand.findAll();
		Promise.all([ reqBrand  ])
			.then(([ brands ]) => {
				res.json({
					data: {brands},
					count: {
						brands: brands.length,
					},
					status: 200
				})
			})
			.catch()
	},
};

module.exports = brandApiController;
