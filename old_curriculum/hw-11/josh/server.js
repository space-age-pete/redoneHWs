var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes")

var PORT = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});