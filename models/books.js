module.exports = function (sequelize, DataTypes) {
    var books = sequelize.define("books", {
        title: DataTypes.STRING
    });
    return books;
};
