// const fs = require('fs');
const { resolve } = require('path');
const { validationResult } = require('express-validator');
const userModel = require(resolve('src/models/user.model'));

const userController = {
  register (req, res) {
    const title = 'Registrar Usuario';
    res.render('./users/register', { title });
  },
  login (req, res) {
    const error = false;
    const title = 'Iniciar Sesión';
    res.render('./users/login', { error, title });
  },
<<<<<<< HEAD
  loginUser:(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.render('./users/login',{error: errors.mapped(),old:req.body})
    }else{
      let adminUsers = userModel.readAdminUsers();
      console.log(typeof req.body.rememberUser);
      res.cookie('Nuevo user',req.body.email,{maxAge: 120000});
      res.cookie('isAdmin',true,{maxAge: 120000});
=======
  loginUser (req, res){
    const error = validationResult(req);
    if(!error.isEmpty()){
      res.render('./users/login', { error: error.mapped(), old:req.body});
    } else {
      const adminUsers = userModel.readAdminUsers();
      // console.log(adminUsers);
      // console.log(typeof req.body.rememberUser);
      res.cookie('Nuevo Usuario', req.body.email, { maxAge: 120000 });
      res.cookie('isAdmin', true, { maxAge: 120000 });
>>>>>>> 7b1694cf80bf75252a65067a1ce41d80f4692351
      res.send(adminUsers);
    }
    

    /* let email = req.body.email;
    let password = req.body.password;
    let findUser = adminUsers.find(
      (user) => user.email == email && user.password == password
    );
    if (findUser) {
      res.redirect('/adminCreate');
    } else {
      let err = true;
      const title = 'Login'
      res.render('./users/login',{err:err,title});
    }  */
  }
};

module.exports = userController;
