const express = require('express');
const router = express.Router();

const brandApiController = require('../../controllers/Api/brand.api');

router.get('/brands', brandApiController.allBrands);

module.exports = router;
