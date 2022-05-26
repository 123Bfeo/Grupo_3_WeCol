module.exports = function (sequelize, dataTypes) {
	const alias = "ShoppingCart";
	const cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		saleamount: {
			type: dataTypes.STRING,
		},
		saledate: {
			type: dataTypes.DATE,
		},
		users_id2: {
			type: dataTypes.INTEGER,
		}
	};

	const config = {
		tableName: "shoppingcart",
		timestamps: false,
	};

	const ShoppingCart = sequelize.define(alias, cols, config);
	ShoppingCart.associate = function (models) {
		ShoppingCart.belongsTo(models.User, {
			as: "ShoppingCartUser",
			foreignKey: "users_id2"

		});
		ShoppingCart.belongsToMany(models.Product, {
			as: "ShoppingCartProduct",
			through: "products_shoppingcart",
			foreignKey: "shoppingcart_id",
			otherKey: "products_id",
			timestamps: false
		});
	}
	return ShoppingCart;
}