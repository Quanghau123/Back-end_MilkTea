'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId', onDelete: 'SET NULL' });
      Product.hasMany(models.CartItem, { foreignKey: 'ProductId' });
      Product.hasMany(models.OrderItem, { foreignKey: 'ProductId' });
    }
  }

  Product.init({
    ProductId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'CategoryId'
      },
      onDelete: 'CASCADE'
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    Description: {
      type: DataTypes.TEXT
    },
    ImageURL: {
      type: DataTypes.STRING
    },
    Available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
    timestamps: true
  });

  return Product;
};
