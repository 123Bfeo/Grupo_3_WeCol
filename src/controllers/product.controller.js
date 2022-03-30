const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
//Importaciones modelos
const productModel = require('../models/product.model');

const {readCategoriesAndBrands} = require('../models/appdata.model');
const [categories,brands] = readCategoriesAndBrands();

const productController = {
  allProducts: (req, res) => {
    const title = 'Admin'
    res.render("product", { title });
  },

  loadProduct: (req, res) => {
    const title = 'Nuevo Producto';
    res.render('./products/createProduct', { title , categories ,brands})
  }
  ,
  productDetail: (req, res) => {
    let products = productModel.read();
    let findProduct = products.find((prod) => prod.id == req.params.id);
    let arrayImg = findProduct.image;
    const arr = Object.values(arrayImg);
    const title = 'Detalle de producto';
    res.render("./products/productDet", { product: findProduct, arrayImg: arr, title });
  },
  adminProducts: (req, res) => {
    const title = 'administrador producto';
    res.render('adminProducts', { title });
  },
  insertProduct: (req, res) => {

    let errors = validationResult(req);
    let err = errors.mapped();
    if(!req.file){
      err.image = {msg: "Ingrese un archivo con formato válido (jpeg,png,jpg)"}
    }
    if(req.body.category==''||req.body.brand==''){
      err.select = {msg: "Seleccione una categoría y una marca"}
    }

    if (Object.keys(err).length>0) {
      res.render('./products/createProduct', { errors: err, old: req.body ,categories,brands});
    } else {
      let reqBody = req.body;
      let reqFile = req.file;
      productModel.create(reqBody, reqFile);
      res.redirect('/product/adminProductMain');

    }

  },
  editProduct: (req, res) => {

    const errors = validationResult(req);
    let err = errors.mapped();
    if(req.body.category==''||req.body.brand==''){
      console.log("no hay categori")
      err.select = {msg: "Seleccione una categoría y una marca"}
    }

    if (Object.keys(err).length>0) {
      let products = productModel.read();
      let product = products.find(prod => prod.id == req.params.id);
      res.render('./products/editProduct', { errors: err, old: req.body ,categories,brands,product});
    } else {
      let products = productModel.read();
      let id = req.params.id;
      let data = req.body;
      let file = req.file;
      productModel.update(data, file, id, products);
      res.redirect('/product/adminProductMain');

    }

  },
  deleteProduct: (req, res) => {
    let id = req.params.id;
    productModel.delete(id);
    res.redirect('/product/adminProductMain');

  },

  searchProduct: (req,res)=>{
    let products = productModel.read();
    let parameter = req.query.search.toLowerCase();
    if(parameter==''){
      let err = "Digite valor válido";
      res.render('./admin/adminProductMain',{categories,brands,err,products});
    }else{

      let find = products.filter( prod => prod.name.toLowerCase().includes(parameter));
      if(find.length>0){

        res.render('./admin/adminProductMain',{find,categories,brands})
      }else{

        const noFind = "No se encontró ningun producto";
        res.render('./admin/adminProductMain',{categories,brands,noFind})
      } 

    }
    
  },
  loadMainAdminProduct : (req,res)=>{
    let products = productModel.read();
    res.render('./admin/adminProductMain',{categories,brands,products});
  },
  searchProducstBy: (req,res)=>{
    let category = req.query.category;
    let brand = req.query.brand;
    let products = productModel.read();
    if(category==''&&brand==''){

      let errCB = "Seleccione una categoría o una marca"    
      res.render('./admin/adminProductMain',{categories,brands,errCB,products})
    }else if(category==''){

      let productsByBrand = products.filter(prod => prod.brand==brand);
      res.render('./admin/adminProductMain',{categories,brands,productsByBrand});

    }else if(brand==''){

      let productsByBcategory = products.filter(prod => prod.category==category);
      res.render('./admin/adminProductMain',{categories,brands,productsByBcategory});
    }else{
    
      let productsByBcategoryAndBrand = products.filter(prod => prod.category==category&&prod.brand==brand);
      res.render('./admin/adminProductMain',{categories,brands,productsByBcategoryAndBrand});

    }
  },
  loadEditProduct: (req,res)=>{
    let products = productModel.read();
    let product = products.find(prod => prod.id == req.params.id);
    res.render('./products/editProduct',{categories,brands,product});
  }
};

module.exports = productController;
