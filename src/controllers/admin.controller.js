const db = require('../../database/models')

const adminController = {
	adminController: (req, res) => {
		const title = "Administrador de productos";
		const reqCategory = db.Category.findAll();
		const reqProduct = db.Product.findAll();
		//const reqUser = db.User.findAll();
		Promise.all([reqCategory, reqProduct])
			.then(([category, product,]) => {
				res.render('./admin/admin', { title, category, product })
			})
	}
}
module.exports = adminController;

