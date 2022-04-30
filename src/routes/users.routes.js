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
userRoutes.post('/login',validatorLoginUser,userController.loginUser);

userRoutes.get('/register', userController.register);
<<<<<<< HEAD:src/routers/users.routes.js
=======
userRoutes.post('/loginUser', validatorLoginUser, userController.loginUser);
>>>>>>> 7b1694cf80bf75252a65067a1ce41d80f4692351:src/routes/users.routes.js

module.exports = userRoutes;
