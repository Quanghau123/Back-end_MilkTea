import db from "@models/index.js";

let getAllCategories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let categories = await db.Category.findAll();
            resolve(categories);
        } catch (e) {
            reject(e);
        }
    });
};

let getCategoryById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({ where: { CategoryId: id } });
            if (!category) {
                return reject({ errCode: 1, errMessage: "Category not found" });
            }
            resolve(category);
        } catch (e) {
            reject(e);
        }
    });
};

let createNewCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.CategoryName) {
                return reject({ errCode: 1, errMessage: "Missing CategoryName" });
            }
            await db.Category.create(data);
            resolve({ errCode: 0, message: "Category created successfully!" });
        } catch (e) {
            reject(e);
        }
    });
};

let updateCategoryData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.CategoryId) {
                return reject({ errCode: 1, errMessage: "Missing CategoryId" });
            }

            let category = await db.Category.findOne({ where: { CategoryId: data.CategoryId }, raw: false });
            if (!category) {
                return reject({ errCode: 1, errMessage: "Category not found" });
            }

            if (data.CategoryName) category.CategoryName = data.CategoryName;
            if (data.ImageURL) category.ImageURL = data.ImageURL;

            await category.save();
            resolve({ errCode: 0, message: "Category updated successfully!" });
        } catch (e) {
            reject({ errCode: 500, errMessage: "Internal server error", error: e.message });
        }
    });
};

let deleteCategory = async (id) => {
    try {
        let category = await db.Category.findOne({ where: { CategoryId: id } });
        if (!category) {
            return { errCode: 1, errMessage: "Category does not exist" };
        }
        await db.Category.destroy({ where: { CategoryId: id } });
        return { errCode: 0, message: "Category deleted successfully!" };
    } catch (error) {
        return { errCode: 500, errMessage: "Database error", error: error.message };
    }
};

export default {
    getAllCategories,
    getCategoryById,
    createNewCategory,
    updateCategoryData,
    deleteCategory,
};
