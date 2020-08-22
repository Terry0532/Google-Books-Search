const db = require("../models");

module.exports = {
    allBooks: function (req, res) {
        db.books
            .findAll({
                where: { userId: req.userId }
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}