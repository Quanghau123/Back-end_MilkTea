import PromotionDetailService from "@services/promotionDetailService.js";

let handleGetAllPromotionDetails = async (req, res) => {
    try {
        const details = await PromotionDetailService.getAllPromotionDetails();
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            details
        });
    } catch (error) {
        return res.status(500).json({
            errCode: 1,
            errMessage: error.message || "Failed to fetch promotion details"
        });
    }
};

let handleGetPromotionDetailById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing DetailId"
            });
        }

        const detail = await PromotionDetailService.getPromotionDetailById(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            detail
        });
    } catch (error) {
        return res.status(404).json({
            errCode: error.errCode || 1,
            errMessage: error.errMessage || "Promotion detail not found"
        });
    }
};

let handleGetPromotionDetailsByPromotionId = async (req, res) => {
    const promotionId = req.params.id;

    if (!promotionId) {
        return res.status(400).json({ errCode: 1, errMessage: "Missing PromotionId" });
    }

    try {
        const details = await PromotionDetailService.getPromotionDetailsByPromotionId(promotionId);
        return res.status(200).json({ errCode: 0, errMessage: "OK", details });
    } catch (error) {
        return res.status(404).json({ errCode: error.errCode || 1, errMessage: error.errMessage || "Promotion details not found" });
    }
};

let handleCreatePromotionDetail = async (req, res) => {
    try {
        const result = await PromotionDetailService.createPromotionDetail(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: error.message || "Error creating promotion detail"
        });
    }
};

let handleUpdatePromotionDetail = async (req, res) => {
    try {
        const result = await PromotionDetailService.updatePromotionDetail(req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: error.message || "Error updating promotion detail"
        });
    }
};

let handleDeletePromotionDetail = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing DetailId"
            });
        }

        const result = await PromotionDetailService.deletePromotionDetail(id);
        return res.status(result.errCode === 0 ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: error.message || "Error deleting promotion detail"
        });
    }
};

export default {
    handleGetAllPromotionDetails,
    handleGetPromotionDetailById,
    handleGetPromotionDetailsByPromotionId,
    handleCreatePromotionDetail,
    handleUpdatePromotionDetail,
    handleDeletePromotionDetail
};
