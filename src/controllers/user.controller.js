const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const userModel = require('../models/user.model');

const userController = {
<<<<<<< HEAD
  register: (req, res) => {
    const title = 'Registrar Usuario';
    res.render('./users/register', { title });
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('./users/register', {
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    }

    let userInBD = userModel.searchNaturalUserEmail(req.body.email);

    if (userInBD) {
      return res.render('./users/register', {
        errors: {
          email: {
            msg: 'este correo ya esta registrado'
          }
        },
        oldData: req.body
      })
    }

    let userToCreate = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename
    }
    userModel.createNaturalUsers(userToCreate);
    res.redirect('/login');

  },


  login: (req, res) => {
    const error = false;
    const title = 'Iniciar Sesión';
    res.render('./users/login', { error, title });
  },

  loginUser: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('./users/login', {
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    }

    let userToLogin = userModel.searchNaturalUserEmail(req.body.email);

    if (userToLogin) {
      let comaparaPasswordUser = bcrypt.compareSync(req.body.password, userToLogin.password);
      if (comaparaPasswordUser) {
        req.session.userLogged = userToLogin
        return res.redirect("/product/adminProductMain");
      }
      return res.render('./users/login', {
        errors: {
          email: {
            msg: 'las credenciales no son correctas'
          }
        }
      })
    }
    return res.render('./users/login', {
      errors: {
        email: {
          msg: 'no se encontro el correo registrado'
        }
      }
    })

  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  }
=======
	register: (req, res) => {
		const title = 'Registrar Usuario';
		res.render('./users/register', { title });
	},
	
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('./users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
		}
		const userInBD = userModel.searchNaturalUserEmail(req.body.email);
		
		if (userInBD) {
			return res.render('./users/register', {
				errors: {
					email: {
						msg: 'este correo ya esta registrado'
					}
				},
				oldData: req.body
			})
		}
		
		const userToCreate = {
			...req.body,
			password: hashSync(req.body.password, 10),
			avatar: req.file.filename
		}
		userModel.createNaturalUsers(userToCreate);
		res.redirect('/user/login');
		
	},
	
	login: (req, res) => {
		const error = false;
		const title = 'Iniciar Sesión';
		res.render('./users/login', { error, title });
	},
	
	loginUser: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('./users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			})
		}
		
		const userToLogin = userModel.searchNaturalUserEmail(req.body.email);
		
		if (userToLogin) {
			const comparePasswordUser = compareSync(req.body.password, userToLogin.password);
			if (comparePasswordUser) {
				req.session.userLogged = userToLogin
				return res.redirect("/admin");
			}
			return res.render('./users/login', {
				errors: {
					email: {
						msg: 'las credenciales no son correctas'
					}
				}
			})
		}
		return res.render('./users/login', {
			errors: {
				email: {
					msg: 'no se encontró el correo registrado'
				}
			}
		})
	},
	
	logout: (req, res) => {
		req.session.destroy();
		res.redirect('/');
	}
>>>>>>> 1788058233a8f2744cb24c34c5006f455b4f6895
}
module.exports = userController;






