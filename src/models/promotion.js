'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Promotion extends Model {
        static associate(models) {
            Promotion.hasOne(models.PromotionDetail, { foreignKey: 'PromotionId', onDelete: 'CASCADE' });
        }
    }

    Promotion.init({
        PromotionId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        StartDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EndDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Scription: {
            type: DataTypes.TEXT
        },
        ImageURL: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Promotion',
        tableName: 'Promotions',
        timestamps: false
    });

    return Promotion;
};
