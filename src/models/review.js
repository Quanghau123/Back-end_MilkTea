'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {
            Review.belongsTo(models.User, { foreignKey: 'UserId', onDelete: 'SET NULL' });
        }
    }

    Review.init({
        ReviewId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
        Rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Comment: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Review',
        tableName: 'Reviews',
        timestamps: true
    });

    return Review;
};
