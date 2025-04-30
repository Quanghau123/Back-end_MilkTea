import db from "@models/index.js";

let getAllCartItems = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cartItems = await db.CartItem.findAll();
            resolve(cartItems);
        } catch (e) {
            reject(e);
        }
    });
};

let getCartItemById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cartItem = await db.CartItem.findOne({ where: { CartItemId: id } });
            if (!cartItem) return reject({ errCode: 1, errMessage: "CartItem not found" });
            resolve(cartItem);
        } catch (e) {
            reject(e);
        }
    });
};

let getCartItemsByUserId = async (userId) => {
    if (!userId) throw new Error('Missing userId');

    const cartItems = await db.CartItem.findAll({
        where: { UserId: userId },
        include: [
            {
                model: db.Product,
            }
        ],
        raw: true
    });

    return cartItems;
};

let createNewCartItem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdItem = await db.CartItem.create(data);
            resolve({
                errCode: 0,
                message: "CartItem created successfully!",
                cartItem: createdItem,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let updateCartItem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.CartItemId) return resolve({ errCode: 1, errMessage: "Missing CartItemId" });

            let cartItem = await db.CartItem.findOne({ where: { CartItemId: data.CartItemId }, raw: false });
            if (!cartItem) return resolve({ errCode: 2, errMessage: "CartItem not found" });

            Object.keys(data).forEach(key => {
                if (key !== "CartItemId") cartItem[key] = data[key];
            });

            await cartItem.save();
            resolve({ errCode: 0, message: "CartItem updated successfully!" });
        } catch (e) {
            reject(e);
        }
    });
};

let deleteCartItem = async (id) => {
    try {
        let cartItem = await db.CartItem.findOne({ where: { CartItemId: id } });
        if (!cartItem) return { errCode: 1, errMessage: "CartItem not found" };

        await db.CartItem.destroy({ where: { CartItemId: id } });
        return { errCode: 0, message: "CartItem deleted successfully!" };
    } catch (e) {
        return { errCode: 500, errMessage: "Internal server error", error: e.message };
    }
};

const getCartSubtotalByUserId = async (userId) => {
    if (!userId) throw new Error('Missing userId');

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

    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.Quantity * item.Product.Price;
    });

    return {
        userId,
        subtotal,
        totalItems: cartItems.length
    };
};

export default {
    getAllCartItems,
    getCartItemById,
    getCartItemsByUserId,
    createNewCartItem,
    updateCartItem,
    deleteCartItem,
    getCartSubtotalByUserId
};
