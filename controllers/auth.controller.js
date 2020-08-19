const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    db.users
        .create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err));
};

exports.signin = (req, res) => {
    db.users
        .findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
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
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token
            });
        })
        .catch(err => res.status(500).json(err));
};