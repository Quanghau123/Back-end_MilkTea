import db from "@models/index.js";

let getAllPromotionDetails = async () => {
    try {
        const details = await db.PromotionDetail.findAll();
        return details;
    } catch (error) {
        throw error;
    }
};

let getPromotionDetailById = async (id) => {
    try {
        const detail = await db.PromotionDetail.findOne({
            where: { DetailId: id }
        });

        if (!detail) {
            throw { errCode: 1, errMessage: "Promotion detail not found" };
        }

        return detail;
    } catch (error) {
        throw error;
    }
};

let getPromotionDetailsByPromotionId = async (promotionId) => {
    const details = await db.PromotionDetail.findOne({
        where: { PromotionId: promotionId },
        include: [
            {
                model: db.Promotion,
                attributes: ['StartDate', 'EndDate', 'Title', 'Scription', 'ImageURL']
            }
        ],
        raw: true
    });

    if (!details) {
        throw { errCode: 1, errMessage: "No promotion details found for the given PromotionId" };
    }

    return details;
};

let createPromotionDetail = async (data) => {
    try {
        await db.PromotionDetail.create(data);
        return {
            errCode: 0,
            message: "Promotion detail created successfully!"
        };
    } catch (error) {
        throw error;
    }
};

let updatePromotionDetail = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.DetailId) {
                return resolve({
                    errCode: 1,
                    errMessage: "Missing DetailId"
                });
            }

            let detail = await db.PromotionDetail.findOne({
                where: { DetailId: data.DetailId },
                raw: false
            });

            if (!detail) {
                return resolve({
                    errCode: 2,
                    errMessage: "Promotion detail not found"
                });
            }

            // Update fields nếu có
            Object.keys(data).forEach(key => {
                if (key !== "DetailId") detail[key] = data[key];
            });

            await detail.save();

            resolve({
                errCode: 0,
                message: "Promotion detail updated successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let deletePromotionDetail = async (id) => {
    try {
        const detail = await db.PromotionDetail.findOne({ where: { DetailId: id } });

        if (!detail) {
            return { errCode: 1, errMessage: "Promotion detail not found" };
        }

        await db.PromotionDetail.destroy({ where: { DetailId: id } });

        return { errCode: 0, message: "Promotion detail deleted successfully!" };
    } catch (error) {
        throw error;
    }
};

export default {
    getAllPromotionDetails,
    getPromotionDetailById,
    getPromotionDetailsByPromotionId,
    createPromotionDetail,
    updatePromotionDetail,
    deletePromotionDetail
};
