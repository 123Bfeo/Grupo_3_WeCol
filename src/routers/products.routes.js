
//Importaciones nativas
const express = require('express');
const path = require('path');
const productRoutes = express.Router();

//Importaciones 
const CONTROLLER_PATH = path.resolve('src/controllers/productController');
const productController = require(CONTROLLER_PATH);

productRoutes.get('/products', productController.allProducts);
productRoutes.get('/productDet/:id', productController.productDetail);
productRoutes.get('/adminProducts',productController.adminProducts);

module.exports = productRoutes;

