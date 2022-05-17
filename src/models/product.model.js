const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const productModel = {
    create: function (body, req) {
        const { name, price, description, category, brand } = body;
        const products = productModel.read();
        const number = Number(products[products.length - 1].id);
        const product = {
            id: number + 1,
            name: name,
            price: price,
            description: description,
            category: category,
            brand: brand,
            rating: "5.0",
            image: {
                img1: `/img/${ req.filename }`,
                img2: "/img/iphone.png",
                img3: "/img/razer.jpg",
                img4: "/img/macbookAir.png",
                img5: "/img/razer.jpg",
                img6: "/img/iphone.png"
            }
            
        }
        products.push(product);
        productModel.write(products);
    },
    read: function () {
        const fileProductsJson = resolve('src/data/products.JSON');
        let products;
        products = JSON.parse(readFileSync(fileProductsJson));
        return products;
    },
    delete: function (id) {
        const products = productModel.read();
        const newListProducts = products.filter(prod => prod.id !== id);
        let index = 1;
        newListProducts.forEach(product => {
            product.id = index;
            index += 1;
        });
        productModel.write(newListProducts);
    },
    update: function (data, file, id, products) {
        products.forEach(product => {
            if (product.id === id) {
                product.name = data.name;
                product.price = data.price;
                product.description = data.description;
                product.category = data.category;
                product.brand = data.brand;
                if (file) {
                    product.image.img1 = '/img/' + file.filename;
                }
            }
        });
        productModel.write(products);
    },
    write: function (products) {
        const newProducts = JSON.stringify(products, null, 2);
        writeFileSync(resolve("src/data/products.JSON"), newProducts);
    }
}

module.exports = productModel;