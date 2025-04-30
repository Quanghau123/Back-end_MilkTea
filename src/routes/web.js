import express from 'express';

import userController from "@controllers/userController.js";
import categoryController from '@controllers/categoryController.js';
import productController from '@controllers/productController.js';
import cartItemController from '@controllers/cartItemController.js';
import paymentController from '@controllers/paymentController.js';
import orderController from '@controllers/orderController.js';
import orderItemController from '@controllers/orderItemController.js';
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

    router.get('/GetAllCartItems', cartItemController.handleGetAllCartItems);
    router.get('/GetCartItemById/:id', cartItemController.handleGetCartItemById);
    router.get('/GetCartItemsByUserId', cartItemController.handleGetCartItemsByUserId);
    router.post('/CreateNewCartItem', cartItemController.handleCreateNewCartItem);
    router.put('/UpdateCartItem', cartItemController.handleUpdateCartItem);
    router.delete('/DeleteCartItem/:id', cartItemController.handleDeleteCartItem);
    router.get('/GetCartSubtotal', cartItemController.handleGetCartSubtotal);

    router.get('/GetAllOrders', orderController.handleGetAllOrders);
    router.get('/GetOrderById/:id', orderController.handleGetOrderById);
    router.get('/GetOrdersByUserId', orderController.handleGetOrdersByUserId);
    router.put('/UpdateOrder', orderController.handleUpdateOrder);
    router.delete('/DeleteOrder/:id', orderController.handleDeleteOrder);
    router.post('/CreateOrderFromCart', orderController.handleCreateOrderFromCart);

    router.get('/GetAllOrderItems', orderItemController.handleGetAllOrderItems);
    router.get('/GetOrderItemById/:id', orderItemController.handleGetOrderItemById);
    router.get('/GetOrderItemsByOrderId/:orderId', orderItemController.handleGetOrderItemsByOrderId);
    router.post('/CreateNewOrderItem', orderItemController.handleCreateNewOrderItem);
    router.put('/UpdateOrderItem', orderItemController.handleUpdateOrderItem);
    router.delete('/DeleteOrderItem/:id', orderItemController.handleDeleteOrderItem);

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
    router.get("/GetPromotionDetailsByPromotionId/:id", promotionDetailController.handleGetPromotionDetailsByPromotionId);
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
