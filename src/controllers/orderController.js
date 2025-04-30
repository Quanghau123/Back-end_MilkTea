import OrderService from "@services/orderService.js";

let handleGetAllOrders = async (req, res) => {
    try {
        let orders = await OrderService.getAllOrders();
        return res.status(200).json({ errCode: 0, errMessage: "OK", orders });
    } catch (e) {
        return res.status(500).json({ errCode: 1, errMessage: e.message || "Error while fetching orders" });
    }
};

let handleGetOrderById = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing OrderId" });

    try {
        let order = await OrderService.getOrderById(id);
        return res.status(200).json({ errCode: 0, errMessage: "OK", order });
    } catch (e) {
        return res.status(404).json({ errCode: e.errCode || 1, errMessage: e.errMessage || "Not found" });
    }
};

const handleGetOrdersByUserId = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) return res.status(400).json({ errCode: 1, errMessage: "Missing userId" });

        const orders = await OrderService.getOrdersByUserId(userId);
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ errCode: -1, errMessage: error.message });
    }
};

let handleUpdateOrder = async (req, res) => {
    try {
        let response = await OrderService.updateOrder(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "Error while updating" });
    }
};

let handleDeleteOrder = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing OrderId" });

    try {
        let response = await OrderService.deleteOrder(id);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 500, errMessage: e.message || "Error while deleting" });
    }
};

const handleCreateOrderFromCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const shippingInfo = {
            address: req.body.Address,
            phone: req.body.Phone
        };

        const result = await OrderService.createOrderFromCart(userId, shippingInfo);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ errCode: -1, errMessage: error.message });
    }
};


export default {
    handleGetAllOrders,
    handleGetOrderById,
    handleGetOrdersByUserId,
    handleUpdateOrder,
    handleDeleteOrder,
    handleCreateOrderFromCart
};
