
//Importaciones nativas
const express = require('express');
const path = require('path');
const mainRoutes = express.Router();


const CONTROLLER_PATH = path.resolve('src/controllers/mainController');
const mainController = require(CONTROLLER_PATH);

mainRoutes.get('/', mainController.index);
mainRoutes.get('/aboutUs', mainController.aboutUs);
mainRoutes.get('/contact', mainController.contact);
mainRoutes.get('/privacyPolitics', mainController.privacyPolitics);
mainRoutes.get('/agreePolitics', mainController.agreePolitics);

module.exports = mainRoutes;



