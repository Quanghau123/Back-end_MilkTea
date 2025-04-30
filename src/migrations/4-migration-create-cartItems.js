module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('CartItems', {
        CartItemId: {
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
      await queryInterface.dropTable('CartItems');
    }
  };