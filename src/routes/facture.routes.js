//Importaciones nativas
const express = require('express');
const path = require('path');
const factureRoutes = express.Router();

const CONTROLLER_PATH = path.resolve('src/controllers/facture.controller');
const factureController = require(CONTROLLER_PATH);

factureRoutes.get('/productCart', factureController.productCart);
factureRoutes.get('/facture', factureController.facture);
factureRoutes.get('/payForm', factureController.payForm);
factureRoutes.get('/paymentRequest', factureController.paymentRequest);

module.exports = factureRoutes;
