const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.use(function (req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
// });
// if (process.env.NODE_ENV !== 'production') require('dotenv').config()

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

db.sequelize.sync().then(function () {
    app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
});