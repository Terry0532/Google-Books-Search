module.exports = function (sequelize, DataTypes) {
    var books = sequelize.define("books", {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        publishedDate: DataTypes.STRING,
        thumbnail: { type: DataTypes.STRING, allowNull: true },
        infoLink: DataTypes.STRING
    });
    return books;
};
