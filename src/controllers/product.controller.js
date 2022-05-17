const { validationResult } = require('express-validator');

const productModel = require('../models/product.model');
const { readCategoriesAndBrands } = require('../models/appdata.model');

const [ categories, brands ] = readCategoriesAndBrands();

const productController = {
  allProducts: (req, res) => {
    const title = 'Admin';
    res.render("product", { title });
  },
  loadProduct: (req, res) => {
    const title = 'Nuevo Producto';
    res.render('./products/createProduct', { title, categories, brands })
  },
  productDetail: (req, res) => {
    const products = productModel.read();
    const findProduct = products.find((prod) => prod.id === req.params.id);
    const arrayImg = findProduct.image;
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
    const errors = validationResult(req);
    const err = errors.mapped();
    if (!req.file) {
      const msg = 'Ingrese un archivo con formato válido (jpeg,png,jpg)';
      err.image = { msg }
    }
    if (req.body.category === '' || req.body.brand === '') {
      const msg = 'Seleccione una categoría y una marca';
      err.select = { msg }
    }
    if (Object.keys(err).length > 0) {
      res.render('./products/createProduct', { errors: err, old: req.body, categories, brands });
    } else {
      const reqBody = req.body;
      const reqFile = req.file;
      productModel.create(reqBody, reqFile);
      res.redirect('/product/adminProductMain');
    }
  },
  editProduct: (req, res) => {
    const errors = validationResult(req);
    const err = errors.mapped();
    
    if (req.body.category === '' || req.body.brand === '') {
      console.log("No hay categoría")
      const msg = 'Seleccione una categoría y una marca';
      err.select = { msg }
    }
    
    if (Object.keys(err).length > 0) {
      const products = productModel.read();
      const product = products.find(prod => prod.id === req.params.id);
      res.render('./products/editProduct', { errors: err, old: req.body, categories, brands, product });
    } else {
      const products = productModel.read();
      const id = req.params.id;
      const data = req.body;
      const file = req.file;
      productModel.update(data, file, id, products);
      res.redirect('/product/adminProductMain');
    }
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;
    productModel.delete(id);
    res.redirect('/product/adminProductMain');
  },
  searchProduct: (req, res) => {
    const products = productModel.read();
    const parameter = req.query.search.toLowerCase();
    if (parameter === '') {
      const err = "Digite valor válido";
      res.render('./admin/adminProductMain', { categories, brands, err, products });
    } else {
      const find = products.filter(prod => prod.name.toLowerCase().includes(parameter));
      if (find.length > 0) {
        res.render('./admin/adminProductMain', { find, categories, brands })
      } else {
        const noFind = "No se encontró ningún producto";
        res.render('./admin/adminProductMain', { categories, brands, noFind })
      }
    }
  },
  searchProductsBy: (req, res) => {
    const category = req.query.category;
    const brand = req.query.brand;
    const products = productModel.read();
    
    if (category === '' && brand === '') {
      const errCB = "Seleccione una categoría o una marca"
      res.render('./admin/adminProductMain', { categories, brands, errCB, products })
    } else if (category === '') {
      const productsByBrand = products.filter(prod => prod.brand === brand);
      res.render('./admin/adminProductMain', { categories, brands, productsByBrand });
    } else if (brand === '') {
      const productsByCategory = products.filter(prod => prod.category === category);
      res.render('./admin/adminProductMain', { categories, brands, productsByCategory });
    } else {
      const productsByCategoryAndBrand = products.filter(prod => prod.category === category && prod.brand === brand);
      res.render('./admin/adminProductMain', { categories, brands, productsByCategoryAndBrand });
    }
  },
  loadEditProduct: (req, res) => {
    const products = productModel.read();
    const product = products.find(prod => prod.id === req.params.id);
    res.render('./products/editProduct', { categories, brands, product: product });
  }
};

module.exports = productController;