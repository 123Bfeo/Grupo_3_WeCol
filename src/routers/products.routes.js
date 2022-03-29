//Importaciones nativas
const express = require('express');
const path = require('path');
const productRoutes = express.Router();
//Importaciones
const CONTROLLER_PATH = path.resolve('src/controllers/product.controller');
const productController = require(CONTROLLER_PATH);

//Middelwares
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const fileMiddleware = require('../middlewares/fileMiddleware');

//Instancias de los middlewares
const validateCreateProduct = validatorMiddleware.createProduct();
const upload = fileMiddleware.addFile();


productRoutes.get('/products', productController.allProducts);
productRoutes.post('/products/insert',upload.single('image'),validateCreateProduct,productController.insertProduct);
productRoutes.get('/productDet/:id', productController.productDetail);
productRoutes.put('/product/editProduct/:id',upload.single('imageEdit'),validateCreateProduct,productController.editProduct);
productRoutes.delete('/product/deleteProduct/:id',productController.deleteProduct);
productRoutes.get('/product/createProduct',productController.loadProduct);
productRoutes.get('/products/searchProduct',productController.searchProduct);
productRoutes.get('/product/adminProductBy',productController.loadMainAdminProductBy);
productRoutes.get('/product/adminProductMain',productController.loadMainAdminProduct);
productRoutes.get('/product/editProduct/:id',productController.loadEditProduct);

module.exports = productRoutes;
