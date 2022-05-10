const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/authenticateMiddleware');

router.get('/', adminMiddleware, adminController.adminController);

module.exports = router;