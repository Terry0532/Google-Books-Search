const jwt = require("jsonwebtoken");

module.exports = {
    verifyToken: function (req, res, next) {
        let token = req.headers["x-access-token"];
        if (!token) {
            res.status(403).send({
                message: "No token provided."
            });
            return;
        }
        jwt.verify(token, process.env.secretKey, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                });
                return;
            }
            req.userId = decoded.id;
            next();
        })
    }
}