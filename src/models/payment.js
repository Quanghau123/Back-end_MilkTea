'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            Payment.belongsTo(models.Order, { foreignKey: "OrderId", onDelete: 'SET NULL' });
            Payment.belongsTo(models.User, { foreignKey: "UserId", onDelete: 'SET NULL' });
        }
    }

    Payment.init({
        PaymentId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Orders',
                key: 'OrderId'
            },
            onDelete: 'CASCADE'
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'UserId'
            },
            onDelete: 'CASCADE'
        },
        PaymentMethod: {
            type: DataTypes.STRING,
        },
        TransactionId: {
            type: DataTypes.STRING,
        },
        Amount: {
            type: DataTypes.FLOAT,
        },
        PaymentStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        sequelize,
        modelName: 'Payment',
        tableName: 'Payments',
        timestamps: true
    });

    return Payment;
};
