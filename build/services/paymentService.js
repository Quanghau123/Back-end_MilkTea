"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index.js"));
var _crypto = _interopRequireDefault(require("crypto"));
var _axios = _interopRequireDefault(require("axios"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Book_Tour = _index["default"].Book_Tour,
  Tour = _index["default"].Tour,
  Payment = _index["default"].Payment;
_dotenv["default"].config();
var getAllPayments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var payments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _index["default"].Payment.findAll();
        case 3:
          payments = _context.sent;
          return _context.abrupt("return", {
            errCode: 0,
            data: payments
          });
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            errCode: 500,
            errMessage: "Database error",
            error: _context.t0.message
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllPayments() {
    return _ref.apply(this, arguments);
  };
}();
var getPaymentById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(paymentId) {
    var payment;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _index["default"].Payment.findOne({
            where: {
              PaymentId: paymentId
            }
          });
        case 3:
          payment = _context2.sent;
          if (payment) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", {
            errCode: 1,
            errMessage: "Payment not found"
          });
        case 6:
          return _context2.abrupt("return", {
            errCode: 0,
            data: payment
          });
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            errCode: 500,
            errMessage: "Database error",
            error: _context2.t0.message
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getPaymentById(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var createNewPayment = function createNewPayment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(!data.BookTourId || !data.UserId || data.PaymentStatus === undefined)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return", reject({
              errCode: 1,
              errMessage: "Missing required fields"
            }));
          case 3:
            _context3.next = 5;
            return _index["default"].Payment.create({
              BookTourId: data.BookTourId,
              UserId: data.UserId,
              PaymentMethod: data.PaymentMethod || "Unknown",
              TransactionId: "TXN_".concat(Date.now()),
              Amount: data.Amount || 0,
              PaymentStatus: data.PaymentStatus
            });
          case 5:
            resolve({
              errCode: 0,
              message: "Payment created successfully!"
            });
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var updatePayment = function updatePayment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var payment;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (data.PaymentId) {
              _context4.next = 3;
              break;
            }
            return _context4.abrupt("return", resolve({
              errCode: 2,
              errMessage: "Missing required parameter"
            }));
          case 3:
            _context4.next = 5;
            return _index["default"].Payment.findOne({
              where: {
                PaymentId: data.PaymentId
              },
              raw: false
            });
          case 5:
            payment = _context4.sent;
            if (!payment) {
              _context4.next = 14;
              break;
            }
            if (data.PaymentStatus !== undefined) payment.PaymentStatus = data.PaymentStatus;
            if (data.Amount !== undefined) payment.Amount = data.Amount;
            _context4.next = 11;
            return payment.save();
          case 11:
            resolve({
              errCode: 0,
              message: "Payment updated successfully!"
            });
            _context4.next = 15;
            break;
          case 14:
            resolve({
              errCode: 1,
              errMessage: "Payment not found!"
            });
          case 15:
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 17]]);
    }));
    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var deletePayment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(paymentId) {
    var payment;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _index["default"].Payment.findOne({
            where: {
              PaymentId: paymentId
            }
          });
        case 3:
          payment = _context5.sent;
          if (payment) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", {
            errCode: 2,
            errMessage: "Payment does not exist"
          });
        case 6:
          _context5.next = 8;
          return _index["default"].Payment.destroy({
            where: {
              PaymentId: paymentId
            }
          });
        case 8:
          return _context5.abrupt("return", {
            errCode: 0,
            message: "Payment deleted successfully!"
          });
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", {
            errCode: 500,
            errMessage: "Database error",
            error: _context5.t0.message
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function deletePayment(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
var processMomoPayment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(userId, bookTourId) {
    var bookTour, amount, partnerCode, accessKey, secretKey, endpoint, requestId, orderId, orderInfo, redirectUrl, ipnUrl, requestType, extraData, rawSignature, signature, payload, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Book_Tour.findOne({
            where: {
              BookTourId: bookTourId
            },
            include: [{
              model: Tour,
              attributes: ['TourPrice']
            }],
            raw: false
          });
        case 3:
          bookTour = _context6.sent;
          if (!(!bookTour || !bookTour.Tour)) {
            _context6.next = 6;
            break;
          }
          throw new Error("Không tìm thấy giá tour");
        case 6:
          // Cách lấy dữ liệu an toàn
          amount = bookTour.Tour.TourPrice;
          partnerCode = process.env.MOMO_PARTNER_CODE;
          accessKey = process.env.MOMO_ACCESS_KEY;
          secretKey = process.env.MOMO_SECRET_KEY;
          endpoint = process.env.MOMO_ENDPOINT;
          requestId = "".concat(partnerCode, "_").concat(Date.now());
          orderId = requestId;
          orderInfo = "Thanh toán MoMo cho tour";
          redirectUrl = "https://yourdomain.com/payment/success";
          ipnUrl = "https://yourdomain.com/payment/callback";
          requestType = "captureWallet";
          extraData = "";
          rawSignature = "accessKey=".concat(accessKey, "&amount=").concat(amount, "&extraData=").concat(extraData, "&ipnUrl=").concat(ipnUrl, "&orderId=").concat(orderId, "&orderInfo=").concat(orderInfo, "&partnerCode=").concat(partnerCode, "&redirectUrl=").concat(redirectUrl, "&requestId=").concat(requestId, "&requestType=").concat(requestType);
          signature = _crypto["default"].createHmac("sha256", secretKey).update(rawSignature).digest("hex");
          payload = {
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: "vi"
          };
          _context6.next = 23;
          return _axios["default"].post(endpoint, payload, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 23:
          response = _context6.sent;
          if (!(response.data.resultCode === 0)) {
            _context6.next = 30;
            break;
          }
          _context6.next = 27;
          return Payment.create({
            BookTourId: bookTourId,
            UserId: userId,
            PaymentMethod: "MoMo",
            TransactionId: orderId,
            Amount: amount,
            PaymentStatus: false
          });
        case 27:
          return _context6.abrupt("return", {
            payUrl: response.data.payUrl
          });
        case 30:
          console.error("TThanh toán thất bại:", response.data);
          throw new Error("Thanh toán thất bại, vui lòng thử lại!");
        case 32:
          _context6.next = 38;
          break;
        case 34:
          _context6.prev = 34;
          _context6.t0 = _context6["catch"](0);
          console.error("Lỗi khi xử lý thanh toán:", _context6.t0);
          throw new Error(_context6.t0.message);
        case 38:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 34]]);
  }));
  return function processMomoPayment(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getAllPayments: getAllPayments,
  getPaymentById: getPaymentById,
  createNewPayment: createNewPayment,
  updatePayment: updatePayment,
  deletePayment: deletePayment,
  processMomoPayment: processMomoPayment
};