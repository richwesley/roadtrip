// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/user.html"));
  });

  app.get("/itinerary", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/itinerary.html"));
  });

  app.get("/activity", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/activity.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};
