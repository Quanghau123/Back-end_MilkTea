'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Product, { foreignKey: 'CategoryId', onDelete: 'SET NULL' });
        }
    }

    Category.init({
        CategoryId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        CategoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ImageURL: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'Categories',
        timestamps: true
    });

    return Category;
};
