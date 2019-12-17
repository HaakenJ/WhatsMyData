'use strict';
module.exports = (sequelize, DataTypes) => {
  const IP = sequelize.define('IP', {
    ip: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "IP"
  });
  IP.associate = function(models) {
    IP.hasOne(models.Hardware);
    IP.hasOne(models.Locations);
    IP.hasOne(models.Logins);
    IP.hasOne(models.Software);
  };
  return IP;
};