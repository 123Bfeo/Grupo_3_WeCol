module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
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

    let config = {
        tableName: "users",
        timestamps: false,
    };

    let User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.belongsToMany(models.Role, {
            as: "userRole",
            through: "users_roles",
            foreingnkey: "roles_id",
            otherkey: "users_id",
            timestamps: false
        })
        User.hasMany(models.opinions, {
            as: "userOpinions",
            foreingnkey: "users_id3",
            timestamps: false
        })
        User.belongsTo(models.Countrie, {
            as: "userContrie",
            foreingnkey: "countries_id",
            timestamps: false
        })
        User.belongsTo(models.Shoppingcart, {
            as: "userShoppingcart",
            foreingnkey: "users_id2",
            timestamps: false
        })

    }
    return User;
}