'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hardware = sequelize.define('Hardware', {
    dev-type: DataTypes.STRING,
    vendor: DataTypes.STRING,
    model: DataTypes.STRING,
    cpu: DataTypes.STRING,
    cores: DataTypes.INTEGER,
    battery-level: DataTypes.INTEGER
  }, {});
  Hardware.associate = function(models) {
    // associations can be defined here
  };
  return Hardware;
};