module.exports = (sequelize, dataTypes) => {
	const alias = 'Brand';
	const cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: dataTypes.STRING,
			notNull: true,
		}
	};
	const config = {
		tableName: 'brands',
		timestamps: false,
	};
	const Brand = sequelize.define(alias, cols, config);

	Brand.associate = function (models) {
		Brand.hasMany(models.Product, {
			as: "brandProduct",
			foreignKey: "brands_id",
		})
	}
	return Brand;
};
