const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/authenticate.middleware');
// adminMiddleware,
router.get('/', adminController.adminController);

module.exports = router;


