import db from "@models/index.js";

let getAllPromotions = async () => {
    try {
        const promotions = await db.Promotion.findAll();
        return promotions;
    } catch (error) {
        throw error;
    }
};

let getPromotionById = async (id) => {
    try {
        const promotion = await db.Promotion.findOne({
            where: { PromotionId: id }
        });

        if (!promotion) {
            throw { errCode: 1, errMessage: "Promotion not found" };
        }

        return promotion;
    } catch (error) {
        throw error;
    }
};

let createPromotion = async (data) => {
    try {
        await db.Promotion.create(data);
        return {
            errCode: 0,
            message: "Promotion created successfully!"
        };
    } catch (error) {
        throw error;
    }
};

let updatePromotion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.PromotionId) {
                return resolve({
                    errCode: 1,
                    errMessage: "Missing PromotionId"
                });
            }

            let promotion = await db.Promotion.findOne({
                where: { PromotionId: data.PromotionId },
                raw: false // Đảm bảo nhận được một instance Sequelize
            });

            if (!promotion) {
                return resolve({
                    errCode: 2,
                    errMessage: "Promotion not found"
                });
            }

            Object.keys(data).forEach(key => {
                if (key !== "PromotionId") promotion[key] = data[key];
            });

            await promotion.save(); 

            resolve({
                errCode: 0,
                message: "Promotion updated successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let deletePromotion = async (id) => {
    try {
        let promotion = await db.Promotion.findOne({ where: { PromotionId: id } });

        if (!promotion) {
            return { errCode: 1, errMessage: "Promotion not found" };
        }

        await db.Promotion.destroy({ where: { PromotionId: id } });

        return { errCode: 0, message: "Promotion deleted successfully!" };
    } catch (error) {
        throw error;
    }
};

export default {
    getAllPromotions,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion
};
