const { verifySignUp } = require("../../middleware");
const router = require("express").Router();
const { signup, signin } = require("../../controllers");

router.route("/signup").post([verifySignUp.checkDuplicateUsernameOrEmail], signup.signup);
router.route("/signin").post(signin.signin);

module.exports = router;