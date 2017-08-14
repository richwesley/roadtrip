
var db = require("../models");


module.exports = function(app) {
  app.get("/api/users", function(req, res) {
  
    db.User.findAll({
      include: [db.Itinerary]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Itinerary]
    }).then(function(dbuser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
      console.log(res);
     
    });   
  });

    

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
     
     
    });
  });

};
