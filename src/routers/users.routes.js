//Importaciones nativas
const express = require("express");
const path = require("path");
const userRoutes = express.Router();

//Importaciones
const CONTROLLER_PATH = path.resolve("src/controllers/userController");
const userController = require(CONTROLLER_PATH);

userRoutes.get("/register", userController.register);
userRoutes.post("/register", userController.processRegister);

userRoutes.get("/users/login", userController.login);
userRoutes.post("/users/login", userController.processLogin);
module.exports = userRoutes;
