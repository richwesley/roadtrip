module.exports = function(sequelize, DataTypes) {
  var Itenerary = sequelize.define("Itenerary", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
	  itenName: {
		  type: DataTypes.STRING,
		  allowNull: false
	  }
     });
  Itenerary.associate = function(models) {
    
    Itenerary.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    return Itenerary;
 };