const fs = require("fs");
const path = require("path");


const productModel = {

    create: function (body, req) {
        const { nombre, price, desc } = body;
        let products = productModel.read();
        let number = Number(products[products.length - 1].id);
        let product = {
            id: number + 1,
            name: nombre,
            price: price,
            description: desc,
            rating: "5.0",
            image: {
                img1: `/img/${req.filename}`,
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
        const products = JSON.parse(
            fs.readFileSync(path.resolve("src/data/products.JSON"))
        );
        return products;
    },
    delete: function (id) {

        let products = productModel.read();
        let newListProducts = products.filter(prod => prod.id != id);
        let index = 1;
        newListProducts.forEach(product => {
            product.id = index;
            index += 1;
        });
        productModel.write(newListProducts);

    },
    update: function (data, file, id, products) {
        products.forEach(product => {
            if (product.id == id) {
                product.name = data.nombre;
                product.price = data.price;
                product.description = data.desc;
                if (file) {
                    if (path.extname(file.filename) == '.jpg' || path.extname(file.filename) == '.png' || path.extname(file.filename) == '.jpeg') {
                        product.image.img1 = '/img/' + file.filename;
                    }

                }
            }
        });
        productModel.write(products);
    },
    write: function (products) {
        let newProducts = JSON.stringify(products, null, 2);
        fs.writeFileSync(path.resolve("src/data/products.JSON"), newProducts);
    }

}

module.exports = productModel;