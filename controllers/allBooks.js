const db = require("../models");

module.exports = {
    allBooks: function (req, res) {
        db.books
            .findAll({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}