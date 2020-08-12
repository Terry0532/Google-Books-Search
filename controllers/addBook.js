const db = require("../models");

module.exports = {
    addBook: function (req, res) {
        db.books
            .create({
                title: req.body.title,
                description: req.body.description,
                publishedDate: req.body.publishedDate,
                thumbnail: req.body.imageLinks !== undefined ? req.body.imageLinks.thumbnail : null,
                infoLink: req.body.infoLink
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}