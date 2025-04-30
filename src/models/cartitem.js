'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.User, { foreignKey: 'UserId' });
      CartItem.belongsTo(models.Product, { foreignKey: 'ProductId' });
    }
  }

  CartItem.init({
    CartItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'CartItems',
    timestamps: true
  });

  return CartItem;
};
