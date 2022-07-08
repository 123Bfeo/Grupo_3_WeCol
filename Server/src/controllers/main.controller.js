const mainController = {
  index: (req, res) => {
    const title = 'Home';
    res.render('index', { title })
  },


  offers: (req, res) => {
    const title = 'Offers';
    res.render('offers', { title });
  },

  contact: (req, res) => {
    const title = 'Contacto';
    res.render('contact', { title });
  },
  //   privacyPolitics: (req, res) => {
  //     const title = 'Política de Privacidad';
  //     res.render('privacyPolitics', { title });
  //   },
  //   agreePolitics: (req, res) => {
  //     const title = 'Políticas';
  //     res.render('agreePolitics', { title });
  //   },
  //   adminCreate: (req, res) => {
  //     const title = 'Administrador Productos';
  //     const products = productModel.read();
  //     res.render('./admin/adminCreate', { products, title });
  //   },*/
};

module.exports = mainController;


