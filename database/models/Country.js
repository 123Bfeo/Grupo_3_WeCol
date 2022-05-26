module.exports = function (sequelize, dataTypes) {
	const alias = "Country";
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
		tableName: "countries",
		timestamps: false,
	};

	const Country = sequelize.define(alias, cols, config);
	Country.associate = function (models) {
		Country.hasMany(models.User, {
			as: "countryUser",
			foreignKey: "countries_id",
		})
	}
	return Country
}