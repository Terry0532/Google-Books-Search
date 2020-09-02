const db = require("../models");

module.exports = {
    addBook: function (req, res) {
        db.books
            .create({
                title: req.body.volumeInfo.title,
                description: req.body.volumeInfo.description,
                publishedDate: req.body.volumeInfo.publishedDate,
                thumbnail: req.body.volumeInfo.imageLinks !== undefined ? req.body.volumeInfo.imageLinks.thumbnail : null,
                infoLink: req.body.volumeInfo.infoLink,
                userId: req.userId,
                bookId: req.body.id
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(err));
    }
}