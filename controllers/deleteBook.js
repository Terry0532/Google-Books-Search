const db = require("../models");

module.exports = {
    deleteBook: function (req, res) {
        db.books
            .destroy({
                where: { id: req.body.id }
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}