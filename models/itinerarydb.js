module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define("Itinerary", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
	  itinType: {
		  type: DataTypes.STRING,
		  allowNull: false
	  }
    // date: {
    //   type: DataTypes.DATE,
    // },
    // confNum: {
    //   type: DataTypes.STRING,
    // },
    // number: {
    //   type: DataTypes.STRING,
    // },
    // miles: {
    //   type: DataTypes.INTEGER,
    // },
    // vehicleType: {
    //   type: DataTypes.STRING,
    // },
    // departTime: {
    //   type: DataTypes.TIME,
    // },
    // arrivalTime: {
    //   type: DataTypes.TIME,
    // },
    // company: {
    //   type: DataTypes.STRING,
    // },
    // addressStreet: {
    //   type: DataTypes.STRING,
    // },
    // addressCity: {
    //   type: DataTypes.STRING,
    // },
    // addressZip: {
    //   type: DataTypes.STRING,
    // },
    // addressState: {
    //   type: DataTypes.STRING,
    // },
    // cost: {
    //   type: DataTypes.INTEGER,
    // }
      });
  Itinerary.associate = function(models) {
    
    Itinerary.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    return Itinerary;
 };