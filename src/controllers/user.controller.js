const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const userModel = require(path.resolve('src/models/user.model'));

const userController = {
  register: (req, res) => {
    const title = 'Registro';
    res.render('./users/register', { title });
  },
  login: (req, res) => {
    let err = false;
    const title = 'Login';
    res.render('./users/login', { err: err, title });
  },
  loginUser:(req,res)=>{ 

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.render('./users/login',{error: errors.mapped(),old:req.body})
    }else{
      let adminUsers = userModel.readAdminUsers();
      console.log(typeof req.body.rememberUser);
      res.cookie('Nuevo user',req.body.email,{maxAge: 120000});
      res.cookie('isAdmin',true,{maxAge: 120000});
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
