const fs = require('fs');
const path = require('path');
const adminUsers = JSON.parse(
  fs.readFileSync(path.resolve('src/data/adminUsers.JSON'))
);

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
  loginUser: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let findUser = adminUsers.find(
      (user) => user.email == email && user.password == password
    );
    if (findUser) {
      res.redirect('/adminCreate');
    } else {
      let err = true;
      const title = 'Login';
      res.render('./users/login', { err: err, title });
    }
  },
};

module.exports = userController;
