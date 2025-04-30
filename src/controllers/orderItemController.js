import OrderItemService from "@services/orderItemService.js";

let handleGetAllOrderItems = async (req, res) => {
    try {
        let orderItems = await OrderItemService.getAllOrderItems();
        return res.status(200).json({ errCode: 0, errMessage: "OK", orderItems });
    } catch (e) {
        return res.status(500).json({ errCode: 1, errMessage: e.message || "Error while fetching order items" });
    }
};

let handleGetOrderItemById = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing OrderItemId" });

    try {
        let orderItem = await OrderItemService.getOrderItemById(id);
        return res.status(200).json({ errCode: 0, errMessage: "OK", orderItem });
    } catch (e) {
        return res.status(404).json({ errCode: e.errCode || 1, errMessage: e.errMessage || "Not found" });
    }
};

let handleGetOrderItemsByOrderId = async (req, res) => {
    try {
        const { orderId } = req.params;
        const items = await OrderItemService.getOrderItemsByOrderId(orderId);
        return res.status(200).json(items);
    } catch (e) {
        return res.status(500).json({ errCode: -1, errMessage: e.message });
    }
};

let handleCreateNewOrderItem = async (req, res) => {
    try {
        let response = await OrderItemService.createNewOrderItem(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "Error while creating" });
    }
};

let handleUpdateOrderItem = async (req, res) => {
    try {
        let response = await OrderItemService.updateOrderItem(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "Error while updating" });
    }
};

let handleDeleteOrderItem = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing OrderItemId" });

    try {
        let response = await OrderItemService.deleteOrderItem(id);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 500, errMessage: e.message || "Error while deleting" });
    }
};

export default {
    handleGetAllOrderItems,
    handleGetOrderItemById,
    handleGetOrderItemsByOrderId ,
    handleCreateNewOrderItem,
    handleUpdateOrderItem,
    handleDeleteOrderItem
};
