'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PromotionDetail extends Model {
        static associate(models) {
            PromotionDetail.belongsTo(models.Promotion, { foreignKey: 'PromotionId', onDelete: 'SET NULL' });
        }
    }

    PromotionDetail.init({
        DetailId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        PromotionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Promotions',
                key: 'PromotionId'
            },
            onDelete: 'CASCADE'
        },
        DiscountType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Note: {
            type: DataTypes.TEXT
        },
        Content: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize,
        modelName: 'PromotionDetail',
        tableName: 'PromotionDetails',
        timestamps: false
    });

    return PromotionDetail;
};
