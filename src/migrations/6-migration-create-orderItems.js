module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('OrderItems', {
        OrderItemId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        OrderId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders',
            key: 'OrderId'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        ProductId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'ProductId'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        Quantity: Sequelize.INTEGER,
        UnitPrice: Sequelize.FLOAT,
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
      await queryInterface.dropTable('OrderItems');
    }
  };