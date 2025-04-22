import express from 'express';
import userController from "@controllers/userController.js";
import categoryController from '@controllers/categoryController.js';
import productController from '@controllers/productController.js';
import paymentController from '@controllers/paymentController.js';
import orderController from '@controllers/orderController.js';
import promotionController from "@controllers/promotionController.js";
import promotionDetailController from "@controllers/promotionDetailController.js";
import reviewController from '@controllers/reviewController.js';

import auth from "../middleware/auth.js";

const { authenticate, authorize } = auth;

const router = express.Router();

let initWebRoutes = (app) => {

    router.post('/Login', userController.handleLogin);
    router.get('/GetAllUsers', userController.handleGetAllUsers);
    router.get('/GetUser/:id', userController.handleGetUserById);
    router.post('/CreateNewUser', userController.handleCreateNewUser);
    router.put('/UpdateUser', userController.handleUpdateUser);
    router.delete('/DeleteUser/:id', userController.handleDeleteUser);
    router.get("/ForgotPassword", userController.forgotPassword);
    router.post("/ResetPassword", userController.resetPassword);

    router.get('/GetAllCategories', categoryController.handleGetAllCategories);
    router.get('/GetCategoryById/:id', categoryController.handleGetCategoryById);
    router.post('/CreateNewCategory', categoryController.handleCreateNewCategory);
    router.put('/UpdateCategory', categoryController.handleUpdateCategory);
    router.delete('/DeleteCategory/:id', categoryController.handleDeleteCategory);

    router.get('/GetAllProducts', productController.handleGetAllProducts);
    router.get('/GetProductById/:id', productController.handleGetProductById);
    router.post('/CreateNewProduct', productController.handleCreateNewProduct);
    router.put('/UpdateProduct', productController.handleUpdateProduct);
    router.delete('/DeleteProduct/:id', productController.handleDeleteProduct);

    router.get('/GetAllOrders', orderController.handleGetAllOrders);
    router.get('/GetOrderById/:id', orderController.handleGetOrderById);
    router.post('/CreateNewOrder', orderController.handleCreateNewOrder);
    router.put('/UpdateOrder', orderController.handleUpdateOrder);
    router.delete('/DeleteOrder/:id', orderController.handleDeleteOrder);

    router.get('/GetAllPayments', paymentController.handleGetAllPayments);
    router.get('/GetPayment/:id', paymentController.handleGetPaymentById);
    router.post('/CreateNewPayment', paymentController.handleCreateNewPayment);
    router.put('/UpdatePayment', paymentController.handleUpdatePayment);
    router.delete('/DeletePayment/:id', paymentController.handleDeletePayment);
    router.post("/Payment/Momo", paymentController.handleProcessMomoPayment);
    router.post('/Payment/Callback', paymentController.handleMomoIPN);

    router.get("/GetAllPromotions", promotionController.handleGetAllPromotions);
    router.get("/GetPromotionById/:id", promotionController.handleGetPromotionById);
    router.post("/CreatePromotion", promotionController.handleCreatePromotion);
    router.put("/UpdatePromotion", promotionController.handleUpdatePromotion);
    router.delete("/DeletePromotion/:id", promotionController.handleDeletePromotion);

    router.get("/GetAllPromotionDetails", promotionDetailController.handleGetAllPromotionDetails);
    router.get("/GetPromotionDetailById/:id", promotionDetailController.handleGetPromotionDetailById);
    router.post("/CreatePromotionDetail", promotionDetailController.handleCreatePromotionDetail);
    router.put("/UpdatePromotionDetail", promotionDetailController.handleUpdatePromotionDetail);
    router.delete("/DeletePromotionDetail/:id", promotionDetailController.handleDeletePromotionDetail);

    router.get('/GetAllReviews', reviewController.handleGetAllReviews);
    router.get('/GetReviewById/:id', reviewController.handleGetReviewById);
    router.post('/CreateNewReview', reviewController.handleCreateNewReview);
    router.put('/UpdateReview', reviewController.handleUpdateReview);
    router.delete('/DeleteReview/:id', reviewController.handleDeleteReview);

    return app.use("/", router);
};

export default initWebRoutes;
