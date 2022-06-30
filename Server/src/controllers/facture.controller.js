const factureController = {
  productCart: (req, res) => {
    const title = 'Carrito de Compras';
    res.render('./products/productCart', { title });
  },
  facture: (req, res) => {
    const title = 'Factura de compra';
    res.render('./products/productDetail',{ title });
  },
  payForm: (req, res) => {
    const title = 'formulario de pago';
    res.render('payForm',{ title });
  },
  paymentRequest: (req, res) => {
    const title = 'paymentRequest';
    res.render('paymentRequest',{ title });
  },
};

module.exports = factureController;
