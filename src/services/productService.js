import db from "@models/index.js";

let getAllProducts = (page = 1, limit = 10) => {
    return new Promise(async (resolve, reject) => {
        try {
            let offset = (page - 1) * limit;
            let { count, rows } = await db.Product.findAndCountAll({
                offset: offset,
                limit: limit
            });

            resolve({
                total: count,
                totalPages: Math.ceil(count / limit),
                currentPage: page,
                products: rows
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getProductById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { ProductId: id }
            });

            if (!product) {
                return reject({
                    errCode: 1,
                    errMessage: "Product not found"
                });
            }

            resolve(product);
        } catch (e) {
            reject(e);
        }
    });
};

let createNewProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Product.create(data);
            resolve({
                errCode: 0,
                message: "Product created successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let updateProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.ProductId) {
                return resolve({
                    errCode: 1,
                    errMessage: "Missing ProductId"
                });
            }

            let product = await db.Product.findOne({
                where: { ProductId: data.ProductId },
                raw: false
            });

            if (!product) {
                return resolve({
                    errCode: 2,
                    errMessage: "Product not found"
                });
            }

            // Update fields nếu có
            Object.keys(data).forEach(key => {
                if (key !== "ProductId") product[key] = data[key];
            });

            await product.save();

            resolve({
                errCode: 0,
                message: "Product updated successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let deleteProduct = async (id) => {
    try {
        let product = await db.Product.findOne({ where: { ProductId: id } });

        if (!product) {
            return { errCode: 1, errMessage: "Product not found" };
        }

        await db.Product.destroy({ where: { ProductId: id } });

        return { errCode: 0, message: "Product deleted successfully!" };
    } catch (e) {
        return { errCode: 500, errMessage: "Internal server error", error: e.message };
    }
};

export default {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
};
