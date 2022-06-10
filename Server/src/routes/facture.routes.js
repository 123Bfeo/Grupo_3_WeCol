const express = require('express');
const factureRoutes = express.Router();

const factureController = require('../controllers/facture.controller');

factureRoutes.get('/productCart', factureController.productCart);
factureRoutes.get('/facture', factureController.facture);
factureRoutes.get('/payForm', factureController.payForm);
factureRoutes.get('/paymentRequest', factureController.paymentRequest);

module.exports = factureRoutes;