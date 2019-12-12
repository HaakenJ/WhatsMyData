'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hardware', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dev - type: {
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
      battery - level: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Hardware');
  }
};