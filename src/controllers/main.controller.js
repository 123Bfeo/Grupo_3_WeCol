const fs = require('fs');
const path = require('path');
const productModel = require('../models/product.model');

const mainController = {
  index: (req, res) => {
    let products = productModel.read();
    const title = 'Home';
    res.render('index', { products: products, title });
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
    let products = productModel.read();
    res.render('./admin/adminCreate', { products: products, title });
  },
};

module.exports = mainController;
