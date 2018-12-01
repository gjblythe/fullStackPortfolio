var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/projects", function(req, res) {
    db.LinkToExample.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/projects", function(req, res) {
    db.LinkToExample.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  //delete after testing
  app.delete("/api/projects/:id", function(req, res) {
    db.LinkToExample.destroy({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
