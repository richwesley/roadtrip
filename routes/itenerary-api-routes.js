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
    
    db.Itinerary.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // Get rotue for retrieving a single Itinerary
  app.get("/api/iteneraries/:id", function(req, res) {
    
    db.Itinerary.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // POST route for saving a new Itinerary
  app.post("/api/iteneraries", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting Itinerary
  app.delete("/api/iteneraries/:id", function(req, res) {
    db.Itinerary.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // PUT route for updating Itinerary
  app.put("/api/iteneraries", function(req, res) {
    db.Itinerary.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItinerary) {
        res.json(dbItinerary);
      });
  });
};
