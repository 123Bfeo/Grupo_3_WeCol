const express = require('express');
const router = express.Router();

const productApiController = require('../../controllers/Api/product.api');

router.get('/products', productApiController.allProducts);

module.exports = router;



