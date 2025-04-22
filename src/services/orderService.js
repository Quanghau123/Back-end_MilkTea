import db from "@models/index.js";

let getAllOrders = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let orders = await db.Order.findAll();
            resolve(orders);
        } catch (err) {
            reject(err);
        }
    });
};

let getOrderById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({ where: { OrderId: id } });

            if (!order) {
                return reject({ errCode: 1, errMessage: "Order not found" });
            }

            resolve(order);
        } catch (err) {
            reject(err);
        }
    });
};

let createNewOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.create(data);
            resolve({
                errCode: 0,
                message: "Order created successfully!"
            });
        } catch (err) {
            reject(err);
        }
    });
};

let updateOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.OrderId) {
                return resolve({ errCode: 1, errMessage: "Missing OrderId" });
            }

            let order = await db.Order.findOne({
                where: { OrderId: data.OrderId },
                raw: false
            });

            if (!order) {
                return resolve({ errCode: 2, errMessage: "Order not found" });
            }

            Object.keys(data).forEach(key => {
                if (key !== "OrderId") order[key] = data[key];
            });

            await order.save();

            resolve({
                errCode: 0,
                message: "Order updated successfully!"
            });
        } catch (err) {
            reject(err);
        }
    });
};

let deleteOrder = async (id) => {
    try {
        let order = await db.Order.findOne({ where: { OrderId: id } });

        if (!order) {
            return { errCode: 1, errMessage: "Order not found" };
        }

        await db.Order.destroy({ where: { OrderId: id } });

        return { errCode: 0, message: "Order deleted successfully!" };
    } catch (err) {
        return { errCode: 500, errMessage: err.message };
    }
};

export default {
    getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder
};
