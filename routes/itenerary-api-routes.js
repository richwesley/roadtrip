// JavaScript Document
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the iteneraries
  app.get("/api/iteneraries", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    
    db.Itenerary.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbItenerary) {
      res.json(dbItenerary);
    });
  });

  // Get rotue for retrieving a single itenerary
  app.get("/api/iteneraries/:id", function(req, res) {
    
    db.Itenarary.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbItenerary) {
      res.json(dbItenerary);
    });
  });

  // POST route for saving a new itenerary
  app.post("/api/iteneraries", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting itenerary
  app.delete("/api/iteneraries/:id", function(req, res) {
    db.Itenerary.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItenerary) {
      res.json(dbItenerary);
    });
  });

  // PUT route for updating itenerary
  app.put("/api/iteneraries", function(req, res) {
    db.Itenerary.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItenerary) {
        res.json(dbItenerary);
      });
  });
};
