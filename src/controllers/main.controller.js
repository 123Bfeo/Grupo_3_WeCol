const fs = require("fs");
const path = require("path");
const productModel = require('../models/product.model');


const mainController = {
  index: (req, res) => {
    let products = productModel.read();
    res.render("index", { products: products });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  privacyPolitics: (req, res) => {
    res.render("privacyPolitics");
  },
  agreePolitics: (req, res) => {
    res.render("agreePolitics");
  },
  adminCreate: (req, res) => {
    let products = productModel.read();
    res.render("adminCreate",{ products: products });
  },
};

module.exports = mainController;
