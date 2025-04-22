import ReviewService from "@services/reviewService.js";

let handleGetAllReviews = async (req, res) => {
    try {
        let reviews = await ReviewService.getAllReviews();
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            reviews
        });
    } catch (err) {
        return res.status(500).json({
            errCode: 1,
            errMessage: err.message || "Error while fetching reviews"
        });
    }
};

let handleGetReviewById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing ReviewId"
        });
    }

    try {
        let review = await ReviewService.getReviewById(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            review
        });
    } catch (err) {
        return res.status(404).json({
            errCode: err.errCode || 1,
            errMessage: err.errMessage || "Review not found"
        });
    }
};

let handleCreateNewReview = async (req, res) => {
    try {
        let result = await ReviewService.createNewReview(req.body);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 2,
            errMessage: err.message || "Error while creating review"
        });
    }
};

let handleUpdateReview = async (req, res) => {
    try {
        let result = await ReviewService.updateReview(req.body);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 2,
            errMessage: err.message || "Error while updating review"
        });
    }
};

let handleDeleteReview = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing ReviewId"
        });
    }

    try {
        let result = await ReviewService.deleteReview(id);
        return res.status(result.errCode === 0 ? 200 : 400).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 500,
            errMessage: err.message || "Error while deleting review"
        });
    }
};

export default {
    handleGetAllReviews,
    handleGetReviewById,
    handleCreateNewReview,
    handleUpdateReview,
    handleDeleteReview
};
