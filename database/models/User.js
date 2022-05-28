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
            type: dataTypes.INTEGER,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        countries_id: {
            type: dataTypes.INTEGER,
        },
        roles_id: {
            type: dataTypes.INTEGER,
            defaultValue: true

        }
    };

    const config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "userRole",
            foreignKey: "roles_id",
        });
        User.hasMany(models.Opinion, {
            as: "userOpinions",
            foreignKey: "users_id3",

        });
        User.belongsTo(models.Country, {
            as: "userCountry",
            foreignKey: "countries_id",

        });
        User.hasOne(models.ShoppingCart, {
            as: "userShoppingCart",
            foreignKey: "users_id2"
        });

    }
    return User;
}
