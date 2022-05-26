module.exports = function (sequelize, dataTypes) {
	const alias = "Opinion";
	const cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: dataTypes.STRING,
		},
		description: {
			type: dataTypes.TEXT,
		},
		response: {
			type: dataTypes.TEXT,
		},
		products_id: {
			type: dataTypes.INTEGER
		}
	};

	const config = {
		tableName: "opinions",
		timeStamps: false,
	};

	const Opinion = sequelize.define(alias, cols, config);
	Opinion.associate = function (models) {
		Opinion.belongsTo(models.Product, {
			as: "opinionProduct",
			foreignKey: "products_id2",
		})
		Opinion.belongsTo(models.User, {
			as: "opinionUser",
			foreignKey: "users_id3",
		})
	}
	return Opinion;
}