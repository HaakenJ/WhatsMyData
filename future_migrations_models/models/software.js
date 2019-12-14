'use strict';
module.exports = (sequelize, DataTypes) => {
  const Software = sequelize.define('Software', {
    os: DataTypes.STRING,
    osVersion: DataTypes.STRING,
    browser: DataTypes.STRING,
    browserVersion: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "Software"
  });
  Software.associate = function(models) {
    Software.belongsTo(models.IP);
  };
  return Software;
};