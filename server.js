var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



// // *********************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory to be served
// // app.use(express.static(path.join(__dirname, 'public')));
// // app.use(express.static("./public"));

// // Routes
// // =============================================================
// require("./public/assets/js/burgers")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
