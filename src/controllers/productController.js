const fs = require('fs');
const path = require('path');
const products = JSON.parse(
  fs.readFileSync(path.resolve('src/models/products.JSON'))
);

const productController = {
  allProducts: (req, res) => {
    res.render('product');
  },
  productDetail: (req, res) => {
    let findProduct = products.find((prod) => prod.id == req.params.id);
    res.render('productDet', { product: findProduct });
  },
  adminProducts: (req,res)=>{
    res.render('adminProducts');
  }
};

module.exports = productController;
