const express = require('express');
const mainRoutes = express.Router();

const mainController = require('../controllers/main.controller');

//const sessionDetectMiddleware = require('../middlewares/sessionDetect.middleware');

mainRoutes.get('/', mainController.index);
mainRoutes.get('/offers', mainController.offers);
mainRoutes.get('/contact', mainController.contact);
// mainRoutes.get('/privacyPolitics', mainController.privacyPolitics);
// mainRoutes.get('/agreePolitics', mainController.agreePolitics);
// mainRoutes.get('/adminCreate', mainController.adminCreate);
module.exports = mainRoutes;
