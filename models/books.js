module.exports = function (sequelize, DataTypes) {
    var books = sequelize.define("books", {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        publishedDate: DataTypes.STRING,
        //some books doesn't have a thumbnail, allow it to be null
        thumbnail: { type: DataTypes.STRING, allowNull: true },
        infoLink: DataTypes.STRING,
        userId: DataTypes.INTEGER
    });
    return books;
};