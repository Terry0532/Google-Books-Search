const router = require("express").Router();
const db = require("../../models");

router.route("/").post((req, res) => {
    console.log("add book");
    db.books.create({
        title: "test"
    }).then(function (dbbook) {
        res.json(dbbook);
    }).catch(function (err) {
        res.json(err);
    });
});

module.exports = router;