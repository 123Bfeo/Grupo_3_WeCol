const userController = {
  register: (req, res) => {
    res.render("register");
  },
  processRegister: (req, res) => {
    res.redirect("index");
  },

  login: (req, res) => {
    res.render("login");
  },
  processLogin: (req, res) => {
    res.render("index");
  },
};

module.exports = userController;
