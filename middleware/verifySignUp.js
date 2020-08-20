const db = require("../models");

module.exports = {
    checkDuplicateUsernameOrEmail: function (req, res, next) {
        db.users.findOne({
            where: {
                username: req.body.username
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Username is already in use."
                });
                return;
            }
            next();
        }).catch(err => res.status(500).json(err));
    }
}