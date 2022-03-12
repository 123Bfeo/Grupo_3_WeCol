
const fs = require('fs');
const path = require('path');
const adminUsers = JSON.parse(fs.readFileSync(path.resolve('src/models/adminUsers.JSON')));

const userController = {
  register: (req, res) => {
    res.render('./users/register');
  },
  login: (req, res) => {
    let err = false;
    res.render('./users/login',{err:err});
  },
  loginUser:(req,res)=>{ 
    let email = req.body.email;
    let password = req.body.password;
    let findUser = adminUsers.find(user => user.email==email&&user.password==password);
    if(findUser){
      res.redirect('/adminCreate');
    }else{
      let err = true;
      res.render('./users/login',{err:err});
    } 
  }
};

module.exports = userController;
