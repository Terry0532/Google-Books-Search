const router = require("express").Router();
const { addBook, deleteBook, allBooks } = require("../../controllers");
const authJwt = require("../../middleware/authJwt");

router
    .route("/")
    .post([authJwt.verifyToken], addBook.addBook)
    .get([authJwt.verifyToken], allBooks.allBooks)
    .delete(deleteBook.deleteBook);

module.exports = router;