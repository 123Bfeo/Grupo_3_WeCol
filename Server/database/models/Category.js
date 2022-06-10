module.exports = function (sequelize, dataTypes) {
	const alias = "Category";
	const cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: dataTypes.STRING,
		}
	};

	const config = {
		tableName: "categories",
		timestamps: false,
	};

	const Category = sequelize.define(alias, cols, config);
	Category.associate = function (models) {
		Category.hasMany(models.Product, {
			as: "categoryProduct",
			foreignKey: "categories_id"
		})
	}
	return Category;
}