import db from "@models/index.js";
import crypto from "crypto";
import axios from "axios";
import dotenv from "dotenv";

const { Order, Payment } = db;

dotenv.config();

let getAllPayments = async () => {
    try {
        let payments = await db.Payment.findAll();
        return { errCode: 0, data: payments };
    } catch (error) {
        return { errCode: 500, errMessage: "Database error", error: error.message };
    }
};

let getPaymentById = async (paymentId) => {
    try {
        let payment = await db.Payment.findOne({ where: { PaymentId: paymentId } });

        if (!payment) {
            return { errCode: 1, errMessage: "Payment not found" };
        }

        return { errCode: 0, data: payment };
    } catch (error) {
        return { errCode: 500, errMessage: "Database error", error: error.message };
    }
};

let createNewPayment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.OrderId || !data.UserId || data.PaymentStatus === undefined) {
                return reject({
                    errCode: 1,
                    errMessage: "Missing required fields"
                });
            }

            await db.Payment.create({
                OrderId: data.OrderId,
                UserId: data.UserId,
                PaymentMethod: data.PaymentMethod || "Unknown",
                TransactionId: `TXN_${Date.now()}`,
                Amount: data.Amount || 0,
                PaymentStatus: data.PaymentStatus,
            });

            resolve({
                errCode: 0,
                message: "Payment created successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let updatePayment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.PaymentId) {
                return resolve({
                    errCode: 2,
                    errMessage: "Missing required parameter"
                });
            }

            let payment = await db.Payment.findOne({
                where: { PaymentId: data.PaymentId },
                raw: false
            });

            if (payment) {
                if (data.PaymentStatus !== undefined) payment.PaymentStatus = data.PaymentStatus;
                if (data.Amount !== undefined) payment.Amount = data.Amount;

                await payment.save();
                resolve({
                    errCode: 0,
                    message: "Payment updated successfully!"
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Payment not found!"
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deletePayment = async (paymentId) => {
    try {
        let payment = await db.Payment.findOne({ where: { PaymentId: paymentId } });

        if (!payment) {
            return { errCode: 2, errMessage: "Payment does not exist" };
        }

        await db.Payment.destroy({ where: { PaymentId: paymentId } });
        return { errCode: 0, message: "Payment deleted successfully!" };
    } catch (error) {
        return { errCode: 500, errMessage: "Database error", error: error.message };
    }
};

const processMomoPayment = async (userId, OrderId) => {
    try {
        let order = await Order.findOne({
            where: { id: OrderId },
            raw: false
        });

        if (!order || !order.TotalAmount) {
            throw new Error("Không tìm thấy đơn hàng hoặc tổng tiền");
        }

        let amount = order.TotalAmount;

        let partnerCode = process.env.MOMO_PARTNER_CODE;
        let accessKey = process.env.MOMO_ACCESS_KEY;
        let secretKey = process.env.MOMO_SECRET_KEY;
        let endpoint = process.env.MOMO_ENDPOINT;

        let requestId = `${partnerCode}_${Date.now()}`;
        let orderId = requestId;
        let orderInfo = "Thanh toán MoMo cho tour";
        let redirectUrl = "https://yourdomain.com/payment/success";
        let ipnUrl = "https://yourdomain.com/payment/callback";
        let requestType = "captureWallet";
        let extraData = "";

        let rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

        let signature = crypto.createHmac("sha256", secretKey)
            .update(rawSignature)
            .digest("hex");

        let payload = {
            partnerCode,
            accessKey,
            requestId,
            amount,
            orderId,
            orderInfo,
            redirectUrl,
            ipnUrl,
            extraData,
            requestType,
            signature,
            lang: "vi"
        };

        let response = await axios.post(endpoint, payload, {
            headers: { "Content-Type": "application/json" }
        });

        if (response.data.resultCode === 0) {
            await Payment.create({
                OrderId: OrderId,
                UserId: userId,
                PaymentMethod: "MoMo",
                TransactionId: orderId,
                Amount: amount,
                PaymentStatus: false
            });

            return { payUrl: response.data.payUrl };
        } else {
            console.error("Thanh toán thất bại:", response.data);
            throw new Error("Thanh toán thất bại, vui lòng thử lại!");
        }
    } catch (error) {
        console.error("Lỗi khi xử lý thanh toán:", error);
        throw new Error(error.message);
    }
};

export default {
    getAllPayments,
    getPaymentById,
    createNewPayment,
    updatePayment,
    deletePayment,
    processMomoPayment,
};
