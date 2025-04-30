module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      OrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'UserId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      OrderDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      ShippingAddress: Sequelize.STRING,
      ShippingPhone: Sequelize.STRING,
      TotalAmount: Sequelize.FLOAT,
      Status: Sequelize.STRING,
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  }
};