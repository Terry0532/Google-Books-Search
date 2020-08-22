const router = require("express").Router();
const savedBooks = require("./savedBooks");
const sign = require("./signin&up");
const topSaved = require("./topSaved");

router.use("/saved", savedBooks);
router.use("/auth", sign);
router.use("/top", topSaved);

module.exports = router;