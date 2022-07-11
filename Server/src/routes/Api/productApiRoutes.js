const express = require('express');
const router = express.Router();

const productApiController = require('../../controllers/Api/product.api');
const userApiController = require('../../controllers/Api/user.api');

router.get('/products', productApiController.allProducts);
router.get('/details/:id', productApiController.detailProducts);
router.get('/offers/:id', productApiController.offersProducts);
router.get('/users', userApiController.allUsers);

module.exports = router;
