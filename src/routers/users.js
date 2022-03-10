//Importaciones nativas
const express = require('express');
const path = require('path');
const userRoutes = express.Router();

//Importaciones 
const CONTROLLER_PATH = path.resolve('src/controllers/userController');
const userController = require(CONTROLLER_PATH);

userRoutes.get('/register',userController.register);
userRoutes.get('/login',userController.login);
userRoutes.post('/loginUser',userController.loginUser);

module.exports = userRoutes;

