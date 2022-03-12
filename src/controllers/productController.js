const fs = require("fs");
const path = require("path");

const getProducts = () => {
  const products = JSON.parse(
    fs.readFileSync(path.resolve("src/models/products.JSON"))
  );
  return products;
}

const productController = {
  allProducts: (req, res) => {
    res.render("product");
  },
  productDetail: (req, res) => {
    let products = getProducts();
    let findProduct = products.find((prod) => prod.id == req.params.id);
    let arrayImg = findProduct.image;
    const arr = Object.values(arrayImg);
    res.render("productDet", { product: findProduct, arrayImg: arr });
  },
  adminProducts: (req, res) => {
    res.render('adminProducts');
  },
  insertProduct: (req, res) => {
    const { nombre, price, desc, image } = req.body;
    let products = getProducts();
    let number = Number(products[products.length - 1].id);
    let product = {
      id: number + 1,
      name: nombre,
      price: price,
      description: desc,
      rating: "5.0",
      image: {
        img1: "/img/razer.jpg",
        img2: "/img/macbookAir.png"
      }

    }
    products.push(product);
    let newProducts = JSON.stringify(products, null, 2);
    fs.writeFileSync(path.resolve("src/models/products.JSON"), newProducts);
    let productsNews = getProducts();
    res.render('adminCreate', { products: productsNews });
  }
};

module.exports = productController;
