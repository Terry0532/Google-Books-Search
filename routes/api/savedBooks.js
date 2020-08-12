const router = require("express").Router();
const { addBook, deleteBook } = require("../../controllers");

router.route("/").post(addBook.addBook);

module.exports = router;