import CategoryService from "@services/categoryService.js";

let handleGetAllCategories = async (req, res) => {
    try {
        let categories = await CategoryService.getAllCategories();
        return res.status(200).json({ errCode: 0, errMessage: "OK", categories });
    } catch (e) {
        return res.status(500).json({ errCode: 1, errMessage: e.message || "An error occurred" });
    }
};

let handleGetCategoryById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({ errCode: 1, errMessage: "Missing required parameter" });
    }

    try {
        let category = await CategoryService.getCategoryById(id);
        return res.status(200).json({ errCode: 0, errMessage: "OK", category });
    } catch (e) {
        return res.status(404).json({ errCode: e.errCode || 1, errMessage: e.errMessage || "Category not found" });
    }
};

let handleCreateNewCategory = async (req, res) => {
    try {
        let message = await CategoryService.createNewCategory(req.body);
        return res.status(200).json(message);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "An error occurred" });
    }
};

let handleUpdateCategory = async (req, res) => {
    try {
        let message = await CategoryService.updateCategoryData(req.body);
        return res.status(200).json(message);
    } catch (e) {
        return res.status(500).json({ errCode: e.errCode || 2, errMessage: e.errMessage || "An error occurred" });
    }
};

let handleDeleteCategory = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({ errCode: 1, errMessage: "Missing required parameter" });
    }

    try {
        let result = await CategoryService.deleteCategory(id);
        return res.status(result.errCode === 0 ? 200 : 400).json(result);
    } catch (e) {
        return res.status(500).json({ errCode: 500, errMessage: "Internal server error", error: e.message });
    }
};

export default {
    handleGetAllCategories,
    handleGetCategoryById,
    handleCreateNewCategory,
    handleUpdateCategory,
    handleDeleteCategory,
};
