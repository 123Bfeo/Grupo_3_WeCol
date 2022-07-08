const db = require('../../database/models');


const mainController = {
  index: (req, res) => {
    const title = 'Home';
    db.Product.findAll()
      .then(( product ) => {
        res.render('index', { title, product })
      });
  },
  
  
  /*aboutUs: (req, res) => {
    const title = 'A cerca';
    db.Category.findAll().then(function (category) {
      res.render('aboutUs', { title, category });
    })
  },
  
  contact: (req, res) => {
    const title = 'Contacto';
    db.Category.findAll().then(function (category) {
      res.render('contact', { title, category });
    })
  },
  privacyPolitics: (req, res) => {
    const title = 'Política de Privacidad';
    res.render('privacyPolitics', { title });
  },
  agreePolitics: (req, res) => {
    const title = 'Políticas';
    res.render('agreePolitics', { title });
  },
  adminCreate: (req, res) => {
    const title = 'Administrador Productos';
    const products = productModel.read();
    res.render('./admin/adminCreate', { products, title });
  },*/
};

module.exports = mainController;


