module.exports = function(sequelize, DataTypes) {
  var Itenerary = sequelize.define("Itenerary", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      }
     })
    return Itenerary;
 };