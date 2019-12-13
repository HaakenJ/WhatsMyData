'use strict';
module.exports = (sequelize, DataTypes) => {
  const IP = sequelize.define('IP', {
    ip: DataTypes.STRING
  }, {});
  IP.associate = function(models) {
    // associations can be defined here
    IP.hasOne(models.Hardware);
    IP.hasOne(models.Locations);
    IP.hasOne(models.Logins);
    IP.hasOne(models.Software);
  };
  return IP;
};