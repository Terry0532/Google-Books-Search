const db = require("../models");

module.exports = {
    allBooks: function (req, res) {
        console.log(req.query.id)
        db.books
            .findAll({
                where: { userId: req.query.id }
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}