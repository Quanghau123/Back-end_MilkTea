'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      PaymentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      OrderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Orders',
          key: 'OrderId'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'UserId'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      PaymentMethod: {
        type: Sequelize.STRING,
      },
      TransactionId: {
        type: Sequelize.STRING,
      },
      Amount: {
        type: Sequelize.FLOAT,
      },
      PaymentStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('Payments');
  }
};
