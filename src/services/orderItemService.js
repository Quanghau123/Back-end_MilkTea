import db from "@models/index.js";

let getAllOrderItems = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderItems = await db.OrderItem.findAll();
            resolve(orderItems);
        } catch (e) {
            reject(e);
        }
    });
};

let getOrderItemById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderItem = await db.OrderItem.findOne({ where: { OrderItemId: id } });
            if (!orderItem) return reject({ errCode: 1, errMessage: "OrderItem not found" });
            resolve(orderItem);
        } catch (e) {
            reject(e);
        }
    });
};

let getOrderItemsByOrderId = async (orderId) => {
    if (!orderId) throw new Error("Missing OrderId");
    console.log("Getting items for OrderId:", orderId);
    const orderItems = await db.OrderItem.findAll({
        where: { OrderId: orderId },
        include: [
            {
                model: db.Product
            }
        ],
        raw: true
    });
    console.log("Items found:", orderItems.length);
    return orderItems;
};

let createNewOrderItem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.OrderItem.create(data);
            resolve({ errCode: 0, message: "OrderItem created successfully!" });
        } catch (e) {
            reject(e);
        }
    });
};

let updateOrderItem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.OrderItemId) return resolve({ errCode: 1, errMessage: "Missing OrderItemId" });

            let orderItem = await db.OrderItem.findOne({ where: { OrderItemId: data.OrderItemId }, raw: false });
            if (!orderItem) return resolve({ errCode: 2, errMessage: "OrderItem not found" });

            Object.keys(data).forEach(key => {
                if (key !== "OrderItemId") orderItem[key] = data[key];
            });

            await orderItem.save();
            resolve({ errCode: 0, message: "OrderItem updated successfully!" });
        } catch (e) {
            reject(e);
        }
    });
};

let deleteOrderItem = async (id) => {
    try {
        let orderItem = await db.OrderItem.findOne({ where: { OrderItemId: id } });
        if (!orderItem) return { errCode: 1, errMessage: "OrderItem not found" };

        await db.OrderItem.destroy({ where: { OrderItemId: id } });
        return { errCode: 0, message: "OrderItem deleted successfully!" };
    } catch (e) {
        return { errCode: 500, errMessage: "Internal server error", error: e.message };
    }
};

export default {
    getAllOrderItems,
    getOrderItemById,
    getOrderItemsByOrderId,
    createNewOrderItem,
    updateOrderItem,
    deleteOrderItem
};
