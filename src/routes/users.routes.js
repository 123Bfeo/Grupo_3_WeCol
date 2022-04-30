//Importaciones nativas
const express = require('express');
const path = require('path');
const userRoutes = express.Router();
//requiero multer
const multer =require('multer');
const multerDiskStorage = require ('../middlewares/multermiddleware');
let fileUpload = multer({storage: multerDiskStorage});






//Importaciones
const userController = require('../controllers/user.controller');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const validatorLoginUser = validatorMiddleware.loginUser();
// validaciones para el registro
const validationRegister = require ('../middlewares/validationRegister')

userRoutes.get('/login', userController.login);
userRoutes.post('/login',validatorLoginUser,userController.loginUser);

userRoutes.get('/register', userController.register);
userRoutes.post('/register',fileUpload.single("avatar"),validationRegister,userController.processRegister);
//userRoutes.post('/loginUser', validatorLoginUser, userController.loginUser);

module.exports = userRoutes;

