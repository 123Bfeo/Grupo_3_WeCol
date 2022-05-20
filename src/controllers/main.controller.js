const productModel = require('../models/product.model');
const db = require('../../database/models');

const mainController = {
  index: (req, res) => {
    const products = productModel.read();
    const title = 'Home';
    db.Category.findAll().then(function (category) {
      res.render('index', { title, category, products });
    })
  },
  aboutUs: (req, res) => {
    const title = 'Detalle de producto';
    res.render('aboutUs', { title });
  },
  contact: (req, res) => {
    const title = 'Contacto';
    res.render('contact', { title });
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
  },
};

module.exports = mainController;



