import paymentService from "@services/paymentService.js";

let handleGetAllPayments = async (req, res) => {
    try {
        let response = await paymentService.getAllPayments();
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            errMessage: "Internal server error",
            error: error.message
        });
    }
};

let handleGetPaymentById = async (req, res) => {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required parameter"
        });
    }

    try {
        let response = await paymentService.getPaymentById(id);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            errMessage: "Internal server error",
            error: error.message
        });
    }
};

let handleGetPaymentsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ errCode: 1, errMessage: "Missing userId parameter" });
        }

        let response = await paymentService.getPaymentsByUserId(userId);
        return res.status(response.errCode === 0 ? 200 : 404).json(response);
    } catch (error) {
        return res.status(500).json({ errCode: 500, errMessage: error.message });
    }
};

let handleSearchPaymentsByUserInfo = async (req, res) => {
    try {
        const { keyword } = req.query;

        if (!keyword) {
            return res.status(400).json({ errCode: 1, errMessage: "Missing search keyword" });
        }

        let response = await paymentService.searchPaymentsByUserInfo(keyword);
        return res.status(response.errCode === 0 ? 200 : 404).json(response);
    } catch (error) {
        return res.status(500).json({ errCode: 500, errMessage: error.message });
    }
};

let handleCreateNewPayment = async (req, res) => {
    try {
        let response = await paymentService.createNewPayment(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.errCode || 500).json(error);
    }
};

let handleUpdatePayment = async (req, res) => {
    try {
        let response = await paymentService.updatePayment(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.errCode || 500).json(error);
    }
};

let handleDeletePayment = async (req, res) => {
    let paymentId = req.params.id;

    if (!paymentId) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required parameter"
        });
    }

    try {
        let response = await paymentService.deletePayment(paymentId);
        return res.status(response.errCode === 0 ? 200 : 400).json(response);
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            errMessage: "Internal server error",
            error: error.message
        });
    }
};

let handleProcessMomoPayment = async (req, res) => {
    try {
        let { UserId, OrderId } = req.body;

        if (!UserId || !OrderId) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Thiếu thông tin thanh toán"
            });
        }

        let result = await paymentService.processMomoPayment(UserId, OrderId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: error.message
        });
    }
};

let handleMomoIPN = async (req, res) => {
    try {
        let { transactionId, resultCode } = req.body;

        if (!transactionId) {
            console.warn("[handleMomoIPN] Thiếu transactionId!");
            return res.status(400).json({ errCode: 1, errMessage: "Thiếu TransactionId" });
        }

        let payment = await paymentService.getPaymentByTransactionId(transactionId);
        if (!payment) {
            console.warn("[handleMomoIPN] Không tìm thấy giao dịch:", transactionId);
            return res.status(404).json({ errCode: 2, errMessage: "Không tìm thấy giao dịch" });
        }

        if (resultCode === 0) {
            const result = await paymentService.updatePaymentStatusByTransactionId(transactionId, true);
            return res.status(200).json(result);
        } else {
            const result = await paymentService.updatePaymentStatusByTransactionId(transactionId, false);
            return res.status(200).json(result);
        }
    } catch (error) {
        console.error("[handleMomoIPN] Lỗi:", error);
        return res.status(500).json({ errCode: -1, errMessage: error.message });
    }
};

export default {
    handleGetAllPayments,
    handleGetPaymentById,
    handleGetPaymentsByUserId,
    handleSearchPaymentsByUserInfo,
    handleCreateNewPayment,
    handleUpdatePayment,
    handleDeletePayment,
    handleProcessMomoPayment,
    handleMomoIPN,
};
