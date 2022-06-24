const DB = require('../../../database/models');

const userController = {
	allUsers: (req, res) => {
		DB.User.findAll()
			.then((users) => {
				res.json({
					data: {
						users
					},
					count: users.length,
					status: 200,
				});
			})
			.catch((err) => { res.json({ err, status: 500 }); });
	}
}

module.exports = userController;