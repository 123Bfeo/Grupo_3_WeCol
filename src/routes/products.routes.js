const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

const validateCreateProductFormMiddleware = require('../middlewares/validateCreateProductForm.middleware');
const productImageMiddleware = require('../middlewares/productImage.middleware');

const validateCreateProduct = validateCreateProductFormMiddleware.createProduct();
const upload = productImageMiddleware.addFile();



router.get('/', productController.allProducts);
router.post('/insert', upload.single('image'), validateCreateProduct, productController.insertProduct);
router.get('/productDet/:id', productController.productDetail);
router.put('/editProduct/:id', upload.single('imageEdit'), validateCreateProduct, productController.editProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);
router.get('/createProduct', productController.loadProduct);
router.get('/searchProduct', productController.searchProduct);
router.get('/adminProductBy', productController.searchProductsBy);
// router.get('/adminProductMain', productController.loadMainAdminProduct);
router.get('/editProduct/:id', productController.loadEditProduct);

module.exports = router;

