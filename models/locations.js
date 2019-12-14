'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
    Locations.belongsTo(models.IP);
  };
  return Locations;
};