"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controllers/userController.js"));
var _categoryController = _interopRequireDefault(require("../controllers/categoryController.js"));
var _productController = _interopRequireDefault(require("../controllers/productController.js"));
var _paymentController = _interopRequireDefault(require("../controllers/paymentController.js"));
var _orderController = _interopRequireDefault(require("../controllers/orderController.js"));
var _promotionController = _interopRequireDefault(require("../controllers/promotionController.js"));
var _promotionDetailController = _interopRequireDefault(require("../controllers/promotionDetailController.js"));
var _reviewController = _interopRequireDefault(require("../controllers/reviewController.js"));
var _auth = _interopRequireDefault(require("../middleware/auth.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authenticate = _auth["default"].authenticate,
  authorize = _auth["default"].authorize;
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.post('/Login', _userController["default"].handleLogin);
  router.get('/GetAllUsers', _userController["default"].handleGetAllUsers);
  router.get('/GetUser/:id', _userController["default"].handleGetUserById);
  router.post('/CreateNewUser', _userController["default"].handleCreateNewUser);
  router.put('/UpdateUser', _userController["default"].handleUpdateUser);
  router["delete"]('/DeleteUser/:id', _userController["default"].handleDeleteUser);
  router.get("/ForgotPassword", _userController["default"].forgotPassword);
  router.post("/ResetPassword", _userController["default"].resetPassword);
  router.get('/GetAllCategories', _categoryController["default"].handleGetAllCategories);
  router.get('/GetCategoryById/:id', _categoryController["default"].handleGetCategoryById);
  router.post('/CreateNewCategory', _categoryController["default"].handleCreateNewCategory);
  router.put('/UpdateCategory', _categoryController["default"].handleUpdateCategory);
  router["delete"]('/DeleteCategory/:id', _categoryController["default"].handleDeleteCategory);
  router.get('/GetAllProducts', _productController["default"].handleGetAllProducts);
  router.get('/GetProductById/:id', _productController["default"].handleGetProductById);
  router.post('/CreateNewProduct', _productController["default"].handleCreateNewProduct);
  router.put('/UpdateProduct', _productController["default"].handleUpdateProduct);
  router["delete"]('/DeleteProduct/:id', _productController["default"].handleDeleteProduct);
  router.get('/GetAllOrders', _orderController["default"].handleGetAllOrders);
  router.get('/GetOrderById/:id', _orderController["default"].handleGetOrderById);
  router.post('/CreateNewOrder', _orderController["default"].handleCreateNewOrder);
  router.put('/UpdateOrder', _orderController["default"].handleUpdateOrder);
  router["delete"]('/DeleteOrder/:id', _orderController["default"].handleDeleteOrder);
  router.get('/GetAllPayments', _paymentController["default"].handleGetAllPayments);
  router.get('/GetPayment/:id', _paymentController["default"].handleGetPaymentById);
  router.post('/CreateNewPayment', _paymentController["default"].handleCreateNewPayment);
  router.put('/UpdatePayment', _paymentController["default"].handleUpdatePayment);
  router["delete"]('/DeletePayment/:id', _paymentController["default"].handleDeletePayment);
  router.post("/Payment/Momo", _paymentController["default"].handleProcessMomoPayment);
  router.post('/Payment/Callback', _paymentController["default"].handleMomoIPN);
  router.get("/GetAllPromotions", _promotionController["default"].handleGetAllPromotions);
  router.get("/GetPromotionById/:id", _promotionController["default"].handleGetPromotionById);
  router.post("/CreatePromotion", _promotionController["default"].handleCreatePromotion);
  router.put("/UpdatePromotion", _promotionController["default"].handleUpdatePromotion);
  router["delete"]("/DeletePromotion/:id", _promotionController["default"].handleDeletePromotion);
  router.get("/GetAllPromotionDetails", _promotionDetailController["default"].handleGetAllPromotionDetails);
  router.get("/GetPromotionDetailById/:id", _promotionDetailController["default"].handleGetPromotionDetailById);
  router.post("/CreatePromotionDetail", _promotionDetailController["default"].handleCreatePromotionDetail);
  router.put("/UpdatePromotionDetail", _promotionDetailController["default"].handleUpdatePromotionDetail);
  router["delete"]("/DeletePromotionDetail/:id", _promotionDetailController["default"].handleDeletePromotionDetail);
  router.get('/GetAllReviews', _reviewController["default"].handleGetAllReviews);
  router.get('/GetReviewById/:id', _reviewController["default"].handleGetReviewById);
  router.post('/CreateNewReview', _reviewController["default"].handleCreateNewReview);
  router.put('/UpdateReview', _reviewController["default"].handleUpdateReview);
  router["delete"]('/DeleteReview/:id', _reviewController["default"].handleDeleteReview);
  return app.use("/", router);
};
var _default = exports["default"] = initWebRoutes;