const router = require("express").Router();
const savedBooks = require("./savedBooks");

router.use("/saved", savedBooks);

module.exports = router;