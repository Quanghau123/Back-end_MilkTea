'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Payment, { foreignKey: "UserId", onDelete: "CASCADE" });
      User.hasMany(models.Review, { foreignKey: "UserId", onDelete: "CASCADE" });
      User.hasMany(models.Order, { foreignKey: "UserId", onDelete: "CASCADE" });
    }
  }

  User.init({
    UserId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: 'user'
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true
  });

  return User;
};
