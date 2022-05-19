module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.TEXT,
        },
        imagen: {
            type: dataTypes.TEXT,
        },
        categories_id: {
            type: dataTypes.INTEGER,
        },
        brands_id: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "Product",
        timestamps: false,
    };

    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.belongsTo(models.Brand, {
            as: "productBrands",
            foreingnkey: "brands_id"
        });
        Product.belongsTo(models.Category, {
            as: "productCategory",
            foreingnkey: "categories_id"
        })
        Product.hasMany(models.opinions, {
            as: "productOpinions",
            foreingnkey: "products_id2"
        })
        Product.belongsToMany(models.Shoppingcart, {
            as: "productShoppingcart",
            through: "products_shoppingcart",
            foreingnkey: "products_id",
            otherkey: "shoppingcart_id",
            timestamps: false
        });
    }

    return Product;
}