// JavaScript Document
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
   
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
   
    User.hasMany(models.Itinerary, {
      onDelete: "cascade"
    });
  };

  return User;
};
