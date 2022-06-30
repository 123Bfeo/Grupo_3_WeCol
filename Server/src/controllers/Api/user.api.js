const DB = require('../../../database/models');

const userController = {
	allUsers: (req, res) => {
		DB.User.findAll()
			.then((users) => {
				res.json({
					data: {
						users
					},
					count: {
						users: users.length,
						userLast: users[users.length - 1]
					},
					route: 'http://localhost:3001/img/users/',
					status: 200,
				});
			})
			.catch((err) => { res.json({ err, status: 500 }); });
	}
}

module.exports = userController;
