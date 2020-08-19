const { authJwt } = require("../../middleware");
const { userPage } = require("../../controllers");
const router = require("express").Router();

router.route("/").get([authJwt.verifyToken], userPage.userPage);

module.exports = router;