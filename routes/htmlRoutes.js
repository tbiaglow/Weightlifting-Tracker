var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.find({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbUsers
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // novice_ex: Send JSON response with user, ordered by date
  app.get("/:user", function(req, res) {
    // Query: In our database, go to the users collection, then "find" everything
    db.users.find({name: req.params.user}).sort({date: 1}, function(err, data) {
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

  // Route for retrieving all Users from the db
  app.get("/user", function(req, res) {
    // Find all Users
    db.User.find({})
      .then(function(dbUser) {
        // If all Users are successfully found, send them back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
  });

  // Route to get a user and populate them with their history
  app.get("/:user", function(req, res) {
    // Find the user
    db.User.find({name: req.params.name})
      // Specify that we want to populate the retrieved user with associated history
      .populate("History")
      .then(function(dbUser) {
        // If able to successfully find and associate all Users and Histories, send them back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
