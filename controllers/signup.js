const db = require("../models");
var bcrypt = require("bcryptjs");

module.exports = {
    signup: function (req, res) {
        db.users
            .create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 8)
            })
            .then(() => res.status(200).end())
            .catch(err => res.status(500).send({ message: err.message }));
    }
}