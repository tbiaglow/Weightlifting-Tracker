var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
