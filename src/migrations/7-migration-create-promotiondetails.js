'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PromotionDetails', {
      DetailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PromotionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Promotions',
          key: 'PromotionId'
        },
        onDelete: 'CASCADE'
      },
      DiscountType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Note: {
        type: Sequelize.TEXT
      },
      Content: {
        type: Sequelize.TEXT
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PromotionDetails');
  }
};
