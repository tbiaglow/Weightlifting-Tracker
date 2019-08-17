// Dependencies
require("dotenv").config();
var express = require("express");
var mongojs = require("mongojs");
var exphbs = require("express-handlebars");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "weightliftingdb";
var collections = ["users"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Root: Displays a simple "Hello World" message (no mongo required)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// novice_ex: Send JSON response with user "novice_ex", ordered by date
app.get("/novice_ex", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.users.find({name: "novice_ex"}).sort({date: 1}, function(err, data) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    else {
      // Otherwise, send the result of this query to the browser
      res.json(data);
    }
  });
});



// novice_ex/squat: Send JSON response of user novice_ex's squat ordered by date
app.get("/novice_ex/squat", function(req, res) {
    db.users.find({name: "novice_ex"}).sort({date: 1}, function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            for(i=0; i<data.length; i++) {
            data[i] = data[i].squat;
            }
            res.json(data)
        }
    })
});

// // 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
// app.get("/weight", function(req, res) {
//     db.animals.find().sort({weight: -1}, function(err, data) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             res.json(data)
//         }
//     })
// });

// Set the app to listen on port 3000
app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

module.exports = app;