import OrderService from "@services/orderService.js";

let handleGetAllOrders = async (req, res) => {
    try {
        let orders = await OrderService.getAllOrders();
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            orders
        });
    } catch (err) {
        return res.status(500).json({
            errCode: 1,
            errMessage: err.message || "Error while fetching orders"
        });
    }
};

let handleGetOrderById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing OrderId"
        });
    }

    try {
        let order = await OrderService.getOrderById(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            order
        });
    } catch (err) {
        return res.status(404).json({
            errCode: err.errCode || 1,
            errMessage: err.errMessage || "Order not found"
        });
    }
};

let handleCreateNewOrder = async (req, res) => {
    try {
        let result = await OrderService.createNewOrder(req.body);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 2,
            errMessage: err.message || "Error while creating order"
        });
    }
};

let handleUpdateOrder = async (req, res) => {
    try {
        let result = await OrderService.updateOrder(req.body);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 2,
            errMessage: err.message || "Error while updating order"
        });
    }
};

let handleDeleteOrder = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing OrderId"
        });
    }

    try {
        let result = await OrderService.deleteOrder(id);
        return res.status(result.errCode === 0 ? 200 : 400).json(result);
    } catch (err) {
        return res.status(500).json({
            errCode: 500,
            errMessage: err.message || "Error while deleting order"
        });
    }
};

export default {
    handleGetAllOrders,
    handleGetOrderById,
    handleCreateNewOrder,
    handleUpdateOrder,
    handleDeleteOrder
};
