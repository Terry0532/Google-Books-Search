const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
});