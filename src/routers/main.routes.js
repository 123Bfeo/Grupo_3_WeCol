//Importaciones nativas
const express = require("express");
const path = require("path");
const mainRoutes = express.Router();

<<<<<<< HEAD:src/routers/appMain.js
const CONTROLLER_PATH = path.resolve("src/controllers/mainController");
const mainController = require(CONTROLLER_PATH);

mainRoutes.get("/", mainController.index);
mainRoutes.get("/aboutUs", mainController.aboutUs);
mainRoutes.get("/contact", mainController.contact);
mainRoutes.get("/privacyPolitics", mainController.privacyPolitics);
mainRoutes.get("/agreePolitics", mainController.agreePolitics);
mainRoutes.get("/adminCreate", mainController.adminCreate);
=======
const CONTROLLER_PATH = path.resolve('src/controllers/main.controller');
const mainController = require(CONTROLLER_PATH);

mainRoutes.get('/', mainController.index);
mainRoutes.get('/aboutUs', mainController.aboutUs);
mainRoutes.get('/contact', mainController.contact);
mainRoutes.get('/privacyPolitics', mainController.privacyPolitics);
mainRoutes.get('/agreePolitics', mainController.agreePolitics);
mainRoutes.get('/register', mainController.register);
mainRoutes.get('/login', mainController.login);
>>>>>>> main:src/routers/main.routes.js

module.exports = mainRoutes;
