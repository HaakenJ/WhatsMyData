'use strict';
module.exports = (sequelize, DataTypes) => {
  const add - associations = sequelize.define('add-associations', {
    IPid: DataTypes.INTEGER
  }, {});
  add - associations.associate = function(models) {
    // associations can be defined here
  };
  return add - associations;
};