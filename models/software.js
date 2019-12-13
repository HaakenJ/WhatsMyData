'use strict';
module.exports = (sequelize, DataTypes) => {
  const Software = sequelize.define('Software', {
    os: DataTypes.STRING,
    osVersion: DataTypes.STRING,
    browser: DataTypes.STRING,
    browserVersion: DataTypes.STRING
  }, {});
  Software.associate = function(models) {
    // associations can be defined here
  };
  return Software;
};