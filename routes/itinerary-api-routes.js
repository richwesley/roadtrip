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
  app.get("/api/itineraries", function(req, res) {
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


  // Get rotue for retrieving a single itinerary
  app.get("/api/itineraries/:id", function(req, res) {
    
    db.Itinerary.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // POST route for saving a new itinerary
  app.post("/api/itineraries", function(req, res) {
    db.Itinerary.create(req.body).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // DELETE route for deleting itinerary
  app.delete("/api/itineraries/:id", function(req, res) {
    db.Itinerary.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItinerary) {
      res.json(dbItinerary);
    });
  });

  // PUT route for updating itinerary
  app.put("/api/itineraries", function(req, res) {
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
