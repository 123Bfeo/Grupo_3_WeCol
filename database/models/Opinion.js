module.exports = function (sequelize, dataTypes) {
    let alias = "Opinion";

    let cols = {
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

    let config = {
        tableName: "opinions",
        timestamps: false,
    };

    let Opinion = sequelize.define(alias, cols, config);
    Opinion.associate = function (models) {
        Opinion.belongsTo(models.Product, {
            as: "opinionProduct",
            foreingnkey: "products_id2",
            timestamps: false
        })
        Opinion.belongsTo(models.User, {
            as: "opinionUser",
            foreingnkey: "users_id3",
            timestamps: false
        })
    }
    return Opinion;
}