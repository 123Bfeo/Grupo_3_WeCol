const factureController = {
  productCart: (req, res) => {
    res.render('productCart');
  },
  facture: (req, res) => {
    res.render('productDetail');
  },
  payForm: (req, res) => {
    res.render('payForm');
  },
  paymentRequest: (req, res) => {
    res.render('paymentRequest');
  },
};

module.exports = factureController;
