const db = require("../models");
var bcrypt = require("bcryptjs");

module.exports = {
    signup: function (req, res) {
        db.users
            .create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 8)
            })
            .then(user => res.status(200).json(user))
            .catch(err => res.status(500).json(err));
    }
}