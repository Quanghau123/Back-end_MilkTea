import db from "@models/index.js";

let getAllOrders = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let orders = await db.Order.findAll();
            resolve(orders);
        } catch (e) {
            reject(e);
        }
    });
};

let getOrderById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({ where: { OrderId: id } });
            if (!order) return reject({ errCode: 1, errMessage: "Order not found" });
            resolve(order);
        } catch (e) {
            reject(e);
        }
    });
};

const getOrdersByUserId = async (userId) => {
    if (!userId) throw new Error("Missing userId");

    const orders = await db.Order.findAll({
        where: { UserId: userId },
        include: [
            {
                model: db.OrderItem,
                include: [
                    {
                        model: db.Product
                    }
                ]
            }
        ],
        raw: true
    });

    return orders;
};

let updateOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.OrderId) return resolve({ errCode: 1, errMessage: "Missing OrderId" });

            let order = await db.Order.findOne({ where: { OrderId: data.OrderId }, raw: false });
            if (!order) return resolve({ errCode: 2, errMessage: "Order not found" });

            Object.keys(data).forEach(key => {
                if (key !== "OrderId") order[key] = data[key];
            });

            await order.save();
            resolve({ errCode: 0, message: "Order updated successfully!" });
        } catch (e) {
            reject(e);
        }
    });
};

let deleteOrder = async (id) => {
    try {
        let order = await db.Order.findOne({ where: { OrderId: id } });
        if (!order) return { errCode: 1, errMessage: "Order not found" };

        await db.Order.destroy({ where: { OrderId: id } });
        return { errCode: 0, message: "Order deleted successfully!" };
    } catch (e) {
        return { errCode: 500, errMessage: "Internal server error", error: e.message };
    }
};

const createOrderFromCart = async (userId, shippingInfo = null) => {
    if (!userId) throw new Error("Missing UserId");

    const cartItems = await db.CartItem.findAll({
        where: { UserId: userId },
        include: [
            {
                model: db.Product,
                attributes: ['Price']
            }
        ],
        raw: true,
        nest: true
    });

    if (!cartItems.length) throw new Error("Cart is empty");

    // Tính tổng tiền
    let totalAmount = 0;
    cartItems.forEach(item => {
        totalAmount += item.Quantity * item.Product.Price;
    });

    // Tạo Order
    const order = await db.Order.create({
        UserId: userId,
        TotalAmount: totalAmount,
        Status: 'pending', // hoặc 'new'
        ShippingAddress: shippingInfo?.address || null,
        ShippingPhone: shippingInfo?.phone || null
    });

    // Tạo OrderItems
    const orderItems = cartItems.map(item => ({
        OrderId: order.OrderId,
        ProductId: item.ProductId,
        Quantity: item.Quantity,
        UnitPrice: item.Product.Price
    }));

    await db.OrderItem.bulkCreate(orderItems);

    // Xóa giỏ hàng
    await db.CartItem.destroy({ where: { UserId: userId } });

    return {
        errCode: 0,
        message: "Order created successfully!",
        orderId: order.OrderId
    };
};

export default {
    getAllOrders,
    getOrderById,
    getOrdersByUserId,
    updateOrder,
    deleteOrder,
    createOrderFromCart
};
