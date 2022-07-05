const db = require('../../database/models');


const productController = {
  products: (req, res) => {
    db.Product.findAll()
      .then(function (product) {
        res.render('./Pages/Products/Products', { product })
      })
  },

  allProducts: (req, res) => {
    const reqCategory = db.Category.findAll();
    const reqProduct = db.Product.findAll();
    Promise.all([reqCategory, reqProduct])
      .then(([category, product]) => {
        //res.render('index', { title, category, product })
        res.send({ category, product })
      });
  },



  //Guardar producto CREADO
  saveProduct: (req, res) => {
    console.log(req.body);
    db.Product.create(
      {
        name: req.body.name,
        description: req.body.description,
      });

    res.send('ya la guarde');
  },

  //detalle del producto
  detailProduct: (req, res) => {
    const title = 'Detalle de producto';
    const reqCategory = db.Category.findAll();
    const reqProduct = db.Product.findByPk(req.params.id);
    Promise.all([reqCategory, reqProduct],
      { include: [{ association: "productCategory" }] })
      .then(([category, product]) => {
        //res.rende('./products/productDet', { title, product, category })
        res.render('./products/productDet', { title, product, category });
      });

  },


};

module.exports = productController;
