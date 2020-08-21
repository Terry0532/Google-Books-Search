const db = require("../models");
var sequelize = require("sequelize");

module.exports = {
    topSaved: function (req, res) {
        db.books
            .findAll({
                group: ["title"],
                attributes: ["title", [sequelize.fn("COUNT", "title"), "times"]]
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}