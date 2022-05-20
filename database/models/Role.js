module.exports = function (sequelize, dataTypes) {
	const alias = "Role";
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
		tableName: "roles",
		timestamps: false,
	};
	
	const Role = sequelize.define(alias, cols, config);
	Role.associate = function (models) {
		Role.belongsToMany(models.User, {
			as: "roleUsers",
			through: "users_roles",
			foreignKey: "users_id",
			otherKey: "roles_id",
			timestamps: false
		})
	}
	return Role;
}