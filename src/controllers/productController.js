const fs = require("fs");
const path = require("path");
const products = JSON.parse(
  fs.readFileSync(path.resolve("src/models/products.JSON"))
);

const productController = {
  allProducts: (req, res) => {
    res.render("product");
  },
  productDetail: (req, res) => {
    let findProduct = products.find((prod) => prod.id == req.params.id);
    let arrayImg = findProduct.image;
    const arr = Object.values(arrayImg);
    res.render("productDet", { product: findProduct, arrayImg: arr });
  },
  adminProducts: (req,res)=>{
    res.render('adminProducts');
  }
};

module.exports = productController;
