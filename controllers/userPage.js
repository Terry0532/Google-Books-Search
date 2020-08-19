const db = require("../models");

module.exports = {
    userPage: function (req, res) {
        res.status(200).send("User Content.");
    }
}