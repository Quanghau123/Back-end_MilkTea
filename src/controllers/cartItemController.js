import CartItemService from "@services/cartItemService.js";

let handleGetAllCartItems = async (req, res) => {
    try {
        let cartItems = await CartItemService.getAllCartItems();
        return res.status(200).json({ errCode: 0, errMessage: "OK", cartItems });
    } catch (e) {
        return res.status(500).json({ errCode: 1, errMessage: e.message || "Error while fetching cart items" });
    }
};

let handleGetCartItemById = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing CartItemId" });

    try {
        let cartItem = await CartItemService.getCartItemById(id);
        return res.status(200).json({ errCode: 0, errMessage: "OK", cartItem });
    } catch (e) {
        return res.status(404).json({ errCode: e.errCode || 1, errMessage: e.errMessage || "Not found" });
    }
};

let handleGetCartItemsByUserId = async (req, res) => {
    try {
        const { userId } = req.query;
        const cartItems = await CartItemService.getCartItemsByUserId(userId);
        res.status(200).json(cartItems);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

let handleCreateNewCartItem = async (req, res) => {
    try {
        let response = await CartItemService.createNewCartItem(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "Error while creating" });
    }
};

let handleUpdateCartItem = async (req, res) => {
    try {
        let response = await CartItemService.updateCartItem(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 2, errMessage: e.message || "Error while updating" });
    }
};

let handleDeleteCartItem = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json({ errCode: 1, errMessage: "Missing CartItemId" });

    try {
        let response = await CartItemService.deleteCartItem(id);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (e) {
        return res.status(500).json({ errCode: 500, errMessage: e.message || "Error while deleting" });
    }
};

const handleGetCartSubtotal = async (req, res) => {
    try {
        const { userId } = req.query;
        const result = await CartItemService.getCartSubtotalByUserId(userId);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default {
    handleGetAllCartItems,
    handleGetCartItemById,
    handleGetCartItemsByUserId,
    handleCreateNewCartItem,
    handleUpdateCartItem,
    handleDeleteCartItem,
    handleGetCartSubtotal
};
