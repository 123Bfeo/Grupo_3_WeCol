module.exports = (sequelize, datatypes) => {
	const alias = 'Brand';
	const cols = {
		id: {
			type: datatypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: datatypes.STRING,
			notNull: true,
		}
	};
	const config = {
		tableName: 'brands',
		timestamp: false
	};
	const Brand = sequelize.define(alias, cols, config);
	return Brand;
};
