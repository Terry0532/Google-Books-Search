const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
    signin: function (req, res) {
        db.users
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({ message: "User Not Found!" });
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                var token = jwt.sign({ id: user.id }, process.env.secretKey, {
                    expiresIn: 86400 // 24 hours
                });
                res.status(200).send({
                    accessToken: token
                });
            })
            .catch(err => res.status(500).json(err));
    }
}