//Importaciones nativas
const express = require('express');
const path = require('path');
const productRoutes = express.Router();

//Importaciones
const CONTROLLER_PATH = path.resolve('src/controllers/product.controller');
const productController = require(CONTROLLER_PATH);

productRoutes.get('/products', productController.allProducts);
productRoutes.post('/products/insert', productController.insertProduct);
productRoutes.get('/productDet/:id', productController.productDetail);

module.exports = productRoutes;
