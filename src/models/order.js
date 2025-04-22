'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, { foreignKey: 'UserId', onDelete: 'SET NULL' });
            Order.belongsTo(models.Product, { foreignKey: 'ProductId', onDelete: 'SET NULL' });
            Order.hasOne(models.Payment, { foreignKey: 'OrderId', onDelete: 'CASCADE' });
        }
    }

    Order.init({
        OrderId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'UserId'
            },
            onDelete: 'CASCADE'
        },
        ProductId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'ProductId'
            },
            onDelete: 'CASCADE'
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1
            }
        },
        TotalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
        timestamps: true
    });

    return Order;
};
