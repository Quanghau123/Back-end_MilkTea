'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      ProductId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'CategoryId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ProductName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      Size: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      ImageURL: {
        type: Sequelize.STRING
      },
      Available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
