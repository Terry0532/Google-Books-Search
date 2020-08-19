const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;
const db = require("./models");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

db.sequelize.sync().then(function () {
    app.listen(PORT, () => console.log("App listening on PORT: " + PORT));
});