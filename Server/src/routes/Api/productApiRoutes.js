const express = require('express');
const router = express.Router();

const productApiController = require('../../controllers/Api/product.api');
const userApiController = require('../../controllers/Api/user.api');

router.get('/products', productApiController.allProducts);
router.get('/users', userApiController.allUsers);

module.exports = router;
