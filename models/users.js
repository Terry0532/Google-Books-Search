module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        username: DataTypes.STRING,
        email: DataTypes.TEXT,
        password: DataTypes.STRING
    });
    return users;
};