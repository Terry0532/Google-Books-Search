const router = require("express").Router();

router.route("/").delete((req, res) => { console.log("delete"); res.send("hi"); });

module.exports = router;