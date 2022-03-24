//Importaciones nativas
const express = require('express');
const path = require('path');
const productRoutes = express.Router();
const multer = require('multer');

//Importaciones
const CONTROLLER_PATH = path.resolve('src/controllers/product.controller');
const productController = require(CONTROLLER_PATH);

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const dest = path.resolve('public/img');
        cb(null, dest); 
    },
    filename:(req,file,cb)=>{
        const name = Date.now()+'_'+path.extname(file.originalname);
        cb(null, name);
    }
});

const upload = multer({storage : storage});

productRoutes.get('/products', productController.allProducts);
productRoutes.post('/products/insert',upload.single('image'),productController.insertProduct);
productRoutes.get('/productDet/:id', productController.productDetail);
productRoutes.put('/product/editProduct/:id',upload.single('imageEdit'),productController.editProduct);
productRoutes.delete('/product/deleteProduct/:id',productController.deleteProduct);

module.exports = productRoutes;
