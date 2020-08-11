const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;

app.use(routes);

app.listen(PORT, () => console.log("App listening on PORT: " + PORT));