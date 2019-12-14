'use strict';
module.exports = (sequelize, DataTypes) => {
  const Logins = sequelize.define('Logins', {
    square: DataTypes.BOOLEAN,
    instagram: DataTypes.BOOLEAN,
    twitter: DataTypes.BOOLEAN,
    facebook: DataTypes.BOOLEAN,
    google: DataTypes.BOOLEAN,
    googlePlus: DataTypes.BOOLEAN,
    skype: DataTypes.BOOLEAN,
    spotify: DataTypes.BOOLEAN,
    reddit: DataTypes.BOOLEAN,
    tumblr: DataTypes.BOOLEAN,
    expedia: DataTypes.BOOLEAN,
    dropbox: DataTypes.BOOLEAN,
    amazon: DataTypes.BOOLEAN,
    pinterest: DataTypes.BOOLEAN,
    netflix: DataTypes.BOOLEAN,
    foursquare: DataTypes.BOOLEAN,
    battleNet: DataTypes.BOOLEAN,
    steam: DataTypes.BOOLEAN,
    stackOverflow: DataTypes.BOOLEAN,
    blogger: DataTypes.BOOLEAN
  }, {});
  Logins.associate = function(models) {
    // associations can be defined here
    Logins.belongsTo(models.IP);
  };
  return Logins;
};