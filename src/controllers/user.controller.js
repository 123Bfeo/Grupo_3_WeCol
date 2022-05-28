const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
const bcrypt = require('bcryptjs')
const db = require('../../database/models');

const userController = {
  //todos los usuarios
  allUser: (req, res) => {
    db.User.findAll().then(function (user) {
      res.send({ user })
    })
  },

  //Login de user Views
  login: (req, res) => {
    db.Category.findAll().then(function (category) {
      res.render('./users/login', { category });
    })
  },

  // Loguearme  un usuario
  processlogin: (req, res) => {
    console.log(req.body.email);
    console.log("=======Estoy aqui=======");
    db.User.findOne(
      {
        where: {
          email: req.body.email
        }
      }
    ).then(function (user) {
      return res.redirect("/admin")
    })

  },

  // vistas para Crear o Registar un usuario
  register: (req, res) => {
    db.Category.findAll().then(function (category) {
      res.render('./users/register', { category });
    })

  },

  // se Crea o se Registra  un usuario
  processRegister: (req, res) => {
    console.log(req.file.filename)
    console.log("====================")
    db.User.create(
      {
        username: req.body.username,
        firstname: req.body.name,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        avatar: req.file.filename,
        password: req.body.password,
        countries_id: req.body.country,
        roles_id: req.body.roles_id
      }).then(function () {

        res.redirect('/login');
      })
    //res.send('Usuario creado');
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
    console.log("==========SALIDA===========")
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






