module.exports = function (sequelize, dataTypes) {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: dataTypes.STRING,
        },
        firstname: {
            type: dataTypes.STRING,
        },
        lastname: {
            type: dataTypes.STRING,
        },
        address: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        phone: {
            type: dataTypes.BIGINT,
        },
        avatar: {
            type: dataTypes.TEXT,
        },
        password: {
            type: dataTypes.STRING,
        },
        countries_id: {
            type: dataTypes.INTEGER,
        }
    };

    const config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.belongsToMany(models.Role, {
            as: "userRole",
            through: "users_roles",
            foreignKey: "roles_id",
            otherKey: "users_id",
            timestamps: false
        });
        User.hasMany(models.Opinion, {
            as: "userOpinions",
            foreignKey: "users_id3",
            timestamps: false
        });
        User.belongsTo(models.Country, {
            as: "userCountry",
            foreignKey: "countries_id",
            timestamps: false
        });
        User.belongsTo(models.ShoppingCart, {
            as: "userShoppingCart",
            foreignKey: "users_id2",
            timestamps: false
        });

    }
    return User;
}