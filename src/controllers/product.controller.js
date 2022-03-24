const fs = require('fs');
const path = require('path');
const productModel = require('../models/product.model');

const productController = {
  allProducts: (req, res) => {
    const title = 'Admin';
    res.render('product', { title });
  },
  productDetail: (req, res) => {
    let products = productModel.read();
    let findProduct = products.find((prod) => prod.id == req.params.id);
    let arrayImg = findProduct.image;
    const arr = Object.values(arrayImg);
    const title = 'Detalle de producto';
    res.render('./products/productDet', {
      product: findProduct,
      arrayImg: arr,
      title,
    });
  },
  adminProducts: (req, res) => {
    const title = 'administrador producto';
    res.render('adminProducts', { title });
  },
  insertProduct: (req, res) => {
    let ext = path.extname(req.file.filename);
    if (ext == '.jpg' || ext == '.png' || ext == '.jpeg') {
      let reqBody = req.body;
      let reqFile = req.file;
      productModel.create(reqBody, reqFile);
      res.redirect('/adminCreate');
    } else {
      res.redirect('/adminCreate');
    }
  },
  editProduct: (req, res) => {
    let products = productModel.read();
    let id = req.params.id;
    let data = req.body;
    let file = req.file;
    productModel.update(data, file, id, products);
    res.redirect('/adminCreate');
  },
  deleteProduct: (req, res) => {
    let id = req.params.id;
    productModel.delete(id);
    res.redirect('/adminCreate');
  },
};

module.exports = productController;
