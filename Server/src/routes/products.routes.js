const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

const validateCreateProductFormMiddleware = require('../middlewares/validateCreateProductForm.middleware');
const productImageMiddleware = require('../middlewares/productImage.middleware');
const userController = require('../controllers/user.controller');

const validateCreateProduct = validateCreateProductFormMiddleware.createProduct();
const upload = productImageMiddleware.addFile();



//Todos los productos
router.get('/product', productController.allProducts);
//Crear un producto
router.get('/create', productController.createProduct);
router.post('/create', upload.single('image'), validateCreateProduct, productController.saveProduct);
// Editar un producto
router.get('/edit/:id', validateCreateProduct, productController.editProduct);
router.put('/edit/:id', upload.single('imageEdit'), validateCreateProduct, productController.updateProduct);
// Eliminar un Producto
router.get('/detail/:id', productController.detailProduct);
// Detalles de un producto
router.delete('/delete/:id', productController.deleteProduct);
// Buscar un producto por ID
router.get('/search/:id', productController.searchProduct);

router.get('/products', productController.products);



module.exports = router;


