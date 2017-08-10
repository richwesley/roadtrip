const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
 
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

const db = require("./models");

// Routes
// =============================================================
require("./routes/user-api-routes")(app);
require("./routes/html-routes")(app);
require("./routes/itinerary-api-routes")(app);

// Syncing sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
      });
});
