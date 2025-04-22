import ProductService from "@services/productService.js";

let handleGetAllProducts = async (req, res) => {
    try {
        let products = await ProductService.getAllProducts();
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            products
        });
    } catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message || "Error while fetching products"
        });
    }
};

let handleGetProductById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing ProductId"
        });
    }

    try {
        let product = await ProductService.getProductById(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            product
        });
    } catch (e) {
        return res.status(404).json({
            errCode: e.errCode || 1,
            errMessage: e.errMessage || "Product not found"
        });
    }
};

let handleCreateNewProduct = async (req, res) => {
    try {
        let response = await ProductService.createNewProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            errCode: 2,
            errMessage: e.message || "Error while creating product"
        });
    }
};

let handleUpdateProduct = async (req, res) => {
    try {
        let response = await ProductService.updateProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            errCode: 2,
            errMessage: e.message || "Error while updating product"
        });
    }
};

let handleDeleteProduct = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing ProductId"
        });
    }

    try {
        let response = await ProductService.deleteProduct(id);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (e) {
        return res.status(500).json({
            errCode: 500,
            errMessage: e.message || "Error while deleting product"
        });
    }
};

export default {
    handleGetAllProducts,
    handleGetProductById,
    handleCreateNewProduct,
    handleUpdateProduct,
    handleDeleteProduct
};
