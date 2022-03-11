//Importaciones nativas
const express = require('express');
const path = require('path');
const userRoutes = express.Router();

//Importaciones
const CONTROLLER_PATH = path.resolve('src/controllers/user.controller');
const userController = require(CONTROLLER_PATH);

userRoutes.get('/register', userController.register);
userRoutes.get('/login', userController.login);

module.exports = userRoutes;
