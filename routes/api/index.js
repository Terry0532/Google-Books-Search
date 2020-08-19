const router = require("express").Router();
const savedBooks = require("./savedBooks");
const sign = require("./signin&up");
const user = require("./user");

router.use("/saved", savedBooks);
router.use("/auth", sign);
router.use("/user", user);

module.exports = router;