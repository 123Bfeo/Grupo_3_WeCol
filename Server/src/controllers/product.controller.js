const { validationResult } = require('express-validator');
const db = require('../../database/models');


const productController = {
  //TODOS los productos
  allProducts: (req, res) => {
    const reqCategory = db.Category.findAll();
    const reqProduct = db.Product.findAll();
    Promise.all([reqCategory, reqProduct])
      .then(([category, product]) => {
        //res.render('index', { title, category, product })
        res.send({ category, product })
      });
  },
  //VISTA para EDITAR producto
  editProduct: (req, res) => {
    const pedidoCartegorias = db.Category.findAll();
    const pedidoBrand = db.Brand.findAll();
    const pedidoProduct = db.Product.findByPk(req.params.id);

    Promise.all([pedidoCartegorias, pedidoProduct, pedidoBrand],
      { include: [{ association: "productCategory" }, { association: "productBrands" }] })
      .then(([category, product, brand]) => {
        res.send({ category, product, brand })
      })
    //res.render('./products/productDet', { category, product })
  },


  //ACTUALIZAR  producto 
  updateProduct: (req, res) => {
    db.Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        categories_id: req.body.category,
        brands_id: req.body.brand,
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.send('ya actualice')
  },

  //CREAR nuevo producto VISTA
  createProduct: (req, res) => {
    const pedidoCartegorias = db.Category.findAll();
    const pedidoBrand = db.Brand.findAll();

    Promise.all([pedidoCartegorias, pedidoBrand],
      { include: [{ association: "categoryProduct" }, { association: "brandProduct" }] })
      .then(([category, brand]) => {
        res.send({ category, brand })
      })
    //res.render('./products/productDet', { category, product })
  },

  //Guardar producto CREADO
  saveProduct: (req, res) => {
    db.Product.create(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        categories_id: req.body.category,
        brands_id: req.body.brand
      });

    res.send('ya la guarde ');
  },

  //Eliminar Producto
  deleteProduct: (req, res) => {
    db.Product.destroy(
      {
        where: {
          id: req.params.id
        }
      });
    res.send("ya esta borrado el Producto");
  },

  //Buscar Producto por NOMBRE
  searchProduct: (req, res) => {
    db.Product.findAll({
      where: {
        name: req.params.id
      }
    }).then(function (product) {
      return res.send({ product })
    })
  },

  // dealles de productos
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