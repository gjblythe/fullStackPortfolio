var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.LinkToExample.findAll({}).then(function(dbExamples) {
      console.log(dbExamples)
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  
  app.get("/about", function(req, res) {
    res.render("about", {
      msg: "Garrett Blythe"
    });
  });
  
  //look into adding all hrefs to a SQL table to be referenced
  app.get("/projects", function(req, res) {
    // Load example page and pass in an example by id
    db.LinkToExample.findAll({}).then(function(dbLinkToExample) {
      res.render("projects", {
        msg: "Projects",
        examples: dbLinkToExample
      });
    });
  });
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
