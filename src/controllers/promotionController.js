import PromotionService from "@services/promotionService.js";

let handleGetAllPromotions = async (req, res) => {
    try {
        let promotions = await PromotionService.getAllPromotions();
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            promotions
        });
    } catch (error) {
        return res.status(500).json({
            errCode: 1,
            errMessage: error.message || "Error while fetching promotions"
        });
    }
};

let handleGetPromotionById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing PromotionId"
            });
        }

        let promotion = await PromotionService.getPromotionById(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            promotion
        });
    } catch (error) {
        return res.status(404).json({
            errCode: error.errCode || 1,
            errMessage: error.errMessage || "Promotion not found"
        });
    }
};

let handleCreatePromotion = async (req, res) => {
    try {
        let result = await PromotionService.createPromotion(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: error.message || "Error while creating promotion"
        });
    }
};

let handleUpdatePromotion = async (req, res) => {
    try {
        let result = await PromotionService.updatePromotion(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: error.message || "Error while updating promotion"
        });
    }
};

let handleDeletePromotion = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing PromotionId"
            });
        }

        let result = await PromotionService.deletePromotion(id);
        return res.status(result.errCode === 0 ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            errMessage: error.message || "Error while deleting promotion"
        });
    }
};

export default {
    handleGetAllPromotions,
    handleGetPromotionById,
    handleCreatePromotion,
    handleUpdatePromotion,
    handleDeletePromotion
};
