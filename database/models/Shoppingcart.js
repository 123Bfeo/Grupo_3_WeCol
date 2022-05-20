module.exports = function (sequelize, dataTypes) {
	let alias = "Shoppingcart";
	
	let cols = {
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
		users_id: {
			type: dataTypes.INTEGER,
		}
	};
	
	let config = {
		tableName: "shoppingcart",
		timestamps: false,
	};
	
	let Shoppingcart = sequelize.define(alias, cols, config);
	Shoppingcart.associate = function (models) {
		Shoppingcart.belongsTo(models.User, {
			as: "ShoppingcartUser",
			foreingnkey: "users_id2"
		});
		Shoppingcart.belongsToMany(models.Product, {
			as: "ShoppingcartProduct",
			through: "products_shoppingcart",
			foreingnkey: "shoppingcart_id",
			otherkey: "products_id",
			timestamps: false
		});
	}
	return Shoppingcart;
}