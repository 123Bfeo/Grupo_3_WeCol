module.exports = function (sequelize, dataTypes) {
    let alias = "Countrie";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
        }
    };

    let config = {
        tableName: "countries",
        timestamps: false,
    };

    let Countrie = sequelize.define(alias, cols, config);
    Countrie.associate = function (models) {
        Countrie.hasMany(models.User, {
            as: "contrieUser",
            foreingnkey: "countries_id",
            timestamps: false
        })
    }

    return Countrie
}