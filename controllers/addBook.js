const db = require("../models");

module.exports = {
    addBook: function (req, res) {
        db.books.create({
            title: "test"
        }).then(data => {
            res.status(200).json(data);
        }).catch(error => {
            console.log(error);
        });
    }
}