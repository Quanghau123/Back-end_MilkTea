'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, { foreignKey: 'OrderId' });
      OrderItem.belongsTo(models.Product, { foreignKey: 'ProductId' });
    }
  }

  OrderItem.init({
    OrderItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    UnitPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'OrderItems',
    timestamps: true
  });

  return OrderItem;
};
