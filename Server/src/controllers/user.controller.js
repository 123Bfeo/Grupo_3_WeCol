const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
const bcrypt = require('bcryptjs')
const db = require('../../database/models');
//const session = require('express-session');

const userController = {
	//todos los usuarios
	allUser: (req, res) => {
		db.User.findAll().then(function (user) {
			res.send({ user })
		})
	},
	
	//Register de user Views
	login: (req, res) => {
		db.Category.findAll().then(function (category) {
			res.render('./Pages/Login/Login', { category });
		})
	},
	
	// Loguearme  un usuario
	processlogin: (req, res) => {
		const resultValidation = validationResult(req)
		console.log(resultValidation);
		if (resultValidation.errors.length > 0) {
			db.Category.findAll().then(function (category) {
				return res.render("./Pages/Login/Login", {
					errors: resultValidation.mapped(),
					oldData: req.body, category
				})
			})
		}
		
		else {
			db.User.findOne(
				{
					where: {
						email: req.body.email,
					}
				}
			).then(function (userToLogin) {
				if (userToLogin) {
					if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
						if (userToLogin.roles_id === 2) {
							delete userToLogin.password;
							req.session.userLogged = userToLogin;
							return res.redirect("/admin")
						}
						else {
							delete userToLogin.password;
							req.session.userLogged = userToLogin
							return res.redirect("/")
						}
					}
					else {
						db.Category.findAll().then(function (category) {
							res.render("./Pages/Login/Login",
								{
									errors: {
										email: {
											msg: 'Estas credenciales son incorrectas'
										}
									},
									category
								}
							)
						})
					}
				}
				else {
					db.Category.findAll().then(function (category) {
						res.render("./Pages/Login/Login",
							{
								errors: {
									email: {
										msg: 'Correo no Registado'
									}
								},
								category
							}
						)
					})
				}
			})
		}
	},
	
	// vistas para Crear o Registar un usuario
	register: (req, res) => {
		db.Category.findAll().then(function (category) {
			res.render('./Pages/Register/Register', { category });
		})
	},
	
	// se Crea o se Registra  un usuario
	processRegister: (req, res) => {
		const resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0) {
			db.Category.findAll().then(function (category) {
				res.render("./users/register", {
					errors: resultValidation.mapped(),
					oldData: req.body, category
				})
			})
		}
		else {
			db.User.findOne(
				{
					where: {
						email: req.body.email,
					}
				}
			).then(function (user) {
				if (user) {
					db.Category.findAll().then(function (category) {
						
						res.render("./users/register",
							{
								errors: {
									email: {
										msg: "Correo ya registrado"
									}
								},
								category
							}
						)
					})
					
				}
				else {
					db.User.create(
						{
							username: req.body.username,
							firstname: req.body.name,
							lastname: req.body.lastname,
							address: req.body.address,
							email: req.body.email,
							phone: req.body.phone,
							avatar: req.file.filename,
							password: bcrypt.hashSync(req.body.password, 10),
							countries_id: req.body.country,
							roles_id: req.body.roles_id
						}).then(function () {
						res.redirect('/login');
					})
				}
			})
		}
		
	},
	//eliminar un usuario
	deleteUser: (req, res) => {
		db.User.destroy(
			{
				where: {
					id: req.params.id
				}
			});
		res.send("ya esta borrada la usuario");
	},
	//Actualizar User
	editUser: (req, res) => {
		db.User.findByPk(req.params.id).then(function (user) {
			res.send({ user });
		})
	},
	
	updateUser: (req, res) => {
		db.User.update(
			{
				username: req.body.username,
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				address: req.body.address,
				email: req.body.email,
				phone: req.body.phone,
				avatar: req.body.avatar,
				password: req.body.password,
				countries_id: req.body.country,
				roles_id: req.body.roles_id
			},
			{
				where: {
					id: req.params.id
				}
			}
		);
		res.send('ya actualice el usuario')
	},
	logout: (req, res) => {
		req.session.destroy();
		res.redirect('/');
	},
	
	users: (req, res) => {
		db.User.findAll().then(function (user) {
			res.render('./Pages/Users/Users', { user });
		})
	}
	
	
	
	
	
	
	
	// const resultValidation = validationResult(req);
	// if (resultValidation.errors.length > 0) {
	//   return res.render('./users/login', {
	//     errors: resultValidation.mapped(),
	//     oldData: req.body
	//   })
	// }
	
	// const userToLogin = userModel.searchNaturalUserEmail(req.body.email);
	// //const userToLogin = db.User.findByPk(req.body.id);
	// //console.log(`Aquí estamos revisando userToLogin: ${ userToLogin }`);
	
	// if (userToLogin) {
	//   const comparePasswordUser = compareSync(req.body.password, userToLogin.password);
	//   if (comparePasswordUser) {
	//     req.session.userLogged = userToLogin
	//     return res.redirect("/admin");
	//   }
	//   return res.render('./users/login', {
	//     errors: { email: { msg: 'las credenciales no son correctas' } }
	//   })
	// }
	// return res.render('./users/login', {
	//   errors: { email: { msg: 'no se encontró el correo registrado' } }
	// })
	
	
	
	// register: (req, res) => {
	//   const title = 'Registrar Usuario';
	//   db.Category.findAll().then(function (category) {
	//     res.render('./users/register', { title, category });
	//   })
	// },
	
	// processRegister: (req, res) => {
	//   const resultValidation = validationResult(req);
	//   if (resultValidation.errors.length > 0) {
	//     return res.render('./users/register', {
	//       errors: resultValidation.mapped(),
	//       oldData: req.body
	//     })
	//   }
	//   const userInBD = userModel.searchNaturalUserEmail(req.body.email);
	
	//   if (userInBD) {
	//     return res.render('./users/register', {
	//       errors: {
	//         email: {
	//           msg: 'este correo ya esta registrado'
	//         }
	//       },
	//       oldData: req.body
	//     })
	//   }
	//   const userToCreate = {
	//     ...req.body,
	//     password: hashSync(req.body.password, 10),
	//     avatar: req.file.filename
	//   }
	//   userModel.createNaturalUsers(userToCreate);
	//   res.redirect('/login');
	
	// },
	
	// logout: (req, res) => {
	//   req.session.destroy();
	//   res.redirect('/');
	// }
}
module.exports = userController;






