const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/authenticate.middleware');

router.get('/', adminMiddleware, adminController.adminController);

module.exports = router;

