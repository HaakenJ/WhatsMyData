'use strict';
module.exports = (sequelize, DataTypes) => {
  const Software = sequelize.define('Software', {
    os: DataTypes.STRING,
    browser: DataTypes.STRING
  }, {});
  Software.associate = function(models) {
    // associations can be defined here
  };
  return Software;
};