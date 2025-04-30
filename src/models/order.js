'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'UserId' });
      Order.hasMany(models.OrderItem, { foreignKey: 'OrderId' });
      Order.hasOne(models.Payment, { foreignKey: 'OrderId' });
    }
  }

  Order.init({
    OrderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: DataTypes.INTEGER,
    OrderDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ShippingAddress: DataTypes.STRING,
    ShippingPhone: DataTypes.STRING,
    TotalAmount: DataTypes.FLOAT,
    Status: DataTypes.STRING // pending, paid, shipped, canceled
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    timestamps: true
  });

  return Order;
};
