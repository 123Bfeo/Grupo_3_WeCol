const express = require('express');
const router = express.Router();
const path = require('path');
//requiero multer
const multer = require('multer');
const multerDiskStorage = require('../middlewares/multermiddleware');
let fileUpload = multer({ storage: multerDiskStorage });






//Importaciones
const userController = require('../controllers/user.controller');
// validaciones para el registro
const validationRegister = require('../middlewares/validationRegister')
const validationLogin = require('../middlewares/validationLogin');

router.get('/login', userController.login);
router.post('/login', validationLogin, userController.loginUser);
//userRoutes.post('/login',validatorLoginUser,userController.loginUser);

router.get('/register', userController.register);
router.post('/register', fileUpload.single("avatar"), validationRegister, userController.processRegister);

router.get('/logout', userController.logout);

module.exports = router;

