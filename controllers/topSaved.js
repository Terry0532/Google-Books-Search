const db = require("../models");
var sequelize = require("sequelize");

module.exports = {
    topSaved: function (req, res) {
        db.books
            .findAll({
                group: ["title"],
                limit: 10,
                attributes: ["title", [sequelize.fn("COUNT", "*"), "times"]],
                order: [[sequelize.literal('times'), 'DESC']]
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}