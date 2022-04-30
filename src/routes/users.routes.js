//Importaciones nativas
const express = require('express');
const { resolve } = require('path');
const userRoutes = express.Router();

//Importaciones
const controllerPath = resolve('src/controllers/user.controller');
const userController = require(controllerPath);

const validatorMiddleware = require('../middlewares/validatorMiddleware');
const validatorLoginUser = validatorMiddleware.loginUser();

userRoutes.get('/login', userController.login);
userRoutes.get('/register', userController.register);
userRoutes.post('/loginUser', validatorLoginUser, userController.loginUser);

module.exports = userRoutes;
