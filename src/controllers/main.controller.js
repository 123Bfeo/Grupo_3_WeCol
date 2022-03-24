const fs = require('fs');
const path = require('path');
const products = JSON.parse(
  fs.readFileSync(path.resolve('src/models/products.JSON'))
);

const mainController = {
  index: (req, res) => {
    const title = 'Inicio - WeCol';
    res.render('index', { title, products });
  },
  aboutUs: (req, res) => {
    const title = 'Sobre Nosotros';
    res.render('aboutUs', { title });
  },
  contact: (req, res) => {
    const title = 'Contáctanos';
    res.render('contact', { title });
  },
  privacyPolitics: (req, res) => {
    const title = 'Políticas de Privacidad';
    res.render('privacyPolitics', { title });
  },
  agreePolitics: (req, res) => {
    const title = 'Acepción de politicas';
    res.render('agreePolitics', { title });
  },
  adminCreate: (req, res) => {
    const title = 'Admin';
    res.render('adminCreate', { title, products });
  },
};

module.exports = mainController;
