
const factureController = {
    productCart: (req, res) => {
        res.render('productCart');
    },
    facture: (req, res) => {
        res.render('productDetail');
    },
    payForm: (req, res) => {
        res.render('payForm');
    }
}

module.exports = factureController;


