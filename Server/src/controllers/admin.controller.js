

const db = require('../../database/models')

const adminController = {
	adminController: (req, res) => {
		const title = "Management";
		const reqCategory = db.Category.findAll();
		const reqProduct = db.Product.findAll();
		Promise.all([reqCategory, reqProduct])
			.then(([category, product,]) => {
				res.render('./Pages/Admin/Admin', { title, category, product })
			})
	}
}
module.exports = adminController;
