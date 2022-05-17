const { validationResult } = require('express-validator');
const { hashSync, compareSync } = require('bcryptjs');

const userModel = require('../models/user.model');

const userController = {
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
      return res.render('./register', {
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
    };
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
    //res.cookie('Nuevo Usuario', req.body.email, { maxAge: 120000 });
    //res.cookie('isAdmin', true, { maxAge: 120000 });
    //res.send(adminUsers);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = userController;