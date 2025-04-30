'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Promotions', {
      PromotionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StartDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      EndDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Scription: {
        type: Sequelize.TEXT
      },
      ImageURL: {
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Promotions');
  }
};
