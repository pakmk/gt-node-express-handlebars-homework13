// Require express, express-handlebars, routes
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// Add a PORT
const PORT = process.env.PORT || 8080;

// Create an instance of express called app
const app = express();

// Parse app. body as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars and routes
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

// Listen on the PORT
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
