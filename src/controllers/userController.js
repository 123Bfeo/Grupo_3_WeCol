
const fs = require('fs');
const path = require('path');
const adminUsers = JSON.parse(fs.readFileSync(path.resolve('src/models/adminUsers.JSON')));

const userController = {
  register: (req, res) => {
    res.render('register');
  },
  login: (req, res) => {
    res.render('login');
  },
  loginUser:(req,res)=>{ 
    let email = req.body.email;
    let password = req.body.password;
    let findUser = adminUsers.find(user => user.email==email&&user.password==password);
    if(findUser){
      res.render('adminProducts');
    }else{
      res.redirect('/login');
    } 
  }
};

module.exports = userController;
