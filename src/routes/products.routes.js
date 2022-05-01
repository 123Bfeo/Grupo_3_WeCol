//Importaciones nativas
const express = require('express');
const { resolve } = require('path');
const router = express.Router();

//Importaciones
const CONTROLLER_PATH = resolve('src/controllers/product.controller');
const productController = require(CONTROLLER_PATH);

//Middlewares
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const fileMiddleware = require('../middlewares/fileMiddleware');

//Instancias de los middlewares
const validateCreateProduct = validatorMiddleware.createProduct();
const upload = fileMiddleware.addFile();


router.get('/', productController.allProducts);
router.post('/insert', upload.single('image'), validateCreateProduct, productController.insertProduct);
router.get('/productDet/:id', productController.productDetail);
router.put('/editProduct/:id', upload.single('imageEdit'), validateCreateProduct, productController.editProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);
router.get('/createProduct', productController.loadProduct);
router.get('/searchProduct', productController.searchProduct);
router.get('/adminProductBy', productController.searchProducstBy);
router.get('/adminProductMain', productController.loadMainAdminProduct);
router.get('/editProduct/:id', productController.loadEditProduct);

module.exports = router;
