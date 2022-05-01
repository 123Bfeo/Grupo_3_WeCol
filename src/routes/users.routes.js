//Importaciones nativas
const express = require('express');
const path = require('path');
const userRoutes = express.Router();
//requiero multer
const multer = require('multer');
const multerDiskStorage = require('../middlewares/multermiddleware');
let fileUpload = multer({ storage: multerDiskStorage });






//Importaciones
const userController = require('../controllers/user.controller');
// validaciones para el registro
const validationRegister = require('../middlewares/validationRegister')
const validationLogin = require('../middlewares/validationLogin');

userRoutes.get('/login', userController.login);
userRoutes.post('/login', validationLogin, userController.loginUser);
//userRoutes.post('/login',validatorLoginUser,userController.loginUser);

userRoutes.get('/register', userController.register);
userRoutes.post('/register', fileUpload.single("avatar"), validationRegister, userController.processRegister);


module.exports = userRoutes;

