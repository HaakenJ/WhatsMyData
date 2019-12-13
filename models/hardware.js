'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hardware = sequelize.define('Hardware', {
    devType: DataTypes.STRING,
    vendor: DataTypes.STRING,
    model: DataTypes.STRING,
    cpu: DataTypes.STRING,
    cores: DataTypes.INTEGER,
    batteryLevel: DataTypes.INTEGER
  }, {});
  Hardware.associate = function(models) {
    // associations can be defined here
  };
  return Hardware;
};