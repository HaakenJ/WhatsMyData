'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ipAddress: {
        type: Sequelize.STRING
      },
      devType: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      cpu: {
        type: Sequelize.STRING
      },
      cores: {
        type: Sequelize.INTEGER
      },
      screenHeight: {
        type: Sequelize.INTEGER
      },
      screenWidth: {
        type: Sequelize.INTEGER
      },
      os: {
        type: Sequelize.STRING
      },
      browser: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      square: {
        type: Sequelize.BOOLEAN
      },
      instagram: {
        type: Sequelize.BOOLEAN
      },
      twitter: {
        type: Sequelize.BOOLEAN
      },
      facebook: {
        type: Sequelize.BOOLEAN
      },
      google: {
        type: Sequelize.BOOLEAN
      },
      googlePlus: {
        type: Sequelize.BOOLEAN
      },
      skype: {
        type: Sequelize.BOOLEAN
      },
      spotify: {
        type: Sequelize.BOOLEAN
      },
      reddit: {
        type: Sequelize.BOOLEAN
      },
      tumblr: {
        type: Sequelize.BOOLEAN
      },
      expedia: {
        type: Sequelize.BOOLEAN
      },
      dropbox: {
        type: Sequelize.BOOLEAN
      },
      amazon: {
        type: Sequelize.BOOLEAN
      },
      pinterest: {
        type: Sequelize.BOOLEAN
      },
      netflix: {
        type: Sequelize.BOOLEAN
      },
      foursquare: {
        type: Sequelize.BOOLEAN
      },
      battleNet: {
        type: Sequelize.BOOLEAN
      },
      steam: {
        type: Sequelize.BOOLEAN
      },
      stackOverflow: {
        type: Sequelize.BOOLEAN
      },
      blogger: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userdata');
  }
};