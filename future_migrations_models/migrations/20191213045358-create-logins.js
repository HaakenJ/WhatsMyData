'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Logins');
  }
};