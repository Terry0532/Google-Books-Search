const router = require("express").Router();
const { topSaved } = require("../../controllers");

router
    .route("/")
    .get(topSaved.topSaved);

module.exports = router;