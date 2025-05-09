"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../models/index.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _mysql = require("mysql2");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var salt = _bcrypt["default"].genSaltSync(10);
var secretKey = process.env.SECRET_KEY;
var tokenExpiry = process.env.TOKEN_EXPIRY;
var hashUserPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(password) {
    var saltRounds;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (password) {
            _context.next = 2;
            break;
          }
          throw new Error("Mật khẩu không được để trống!");
        case 2:
          saltRounds = 10;
          return _context.abrupt("return", _bcrypt["default"].hashSync(password, saltRounds));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function hashUserPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var userData, isExist, user, check, token;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            userData = {};
            _context2.next = 4;
            return checkUserEmail(email);
          case 4:
            isExist = _context2.sent;
            if (isExist) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", resolve({
              errCode: 1,
              errMessage: "Email does not exist. Please try another email!"
            }));
          case 7:
            _context2.next = 9;
            return _index["default"].User.findOne({
              attributes: ['Email', 'Role', 'UserPassword', 'UserName', 'Phone', 'Address', 'UserId'],
              where: {
                Email: email
              },
              raw: true
            });
          case 9:
            user = _context2.sent;
            if (user) {
              _context2.next = 12;
              break;
            }
            return _context2.abrupt("return", resolve({
              errCode: 2,
              errMessage: "User not found"
            }));
          case 12:
            check = _bcrypt["default"].compareSync(password, user.UserPassword);
            if (check) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", resolve({
              errCode: 3,
              errMessage: "Wrong password"
            }));
          case 15:
            token = _jsonwebtoken["default"].sign({
              email: user.Email,
              role: user.Role
            }, secretKey, {
              expiresIn: tokenExpiry
            });
            delete user.UserPassword;
            userData.errCode = 0;
            userData.errMessage = 'OK';
            userData.user = user;
            userData.token = token;
            resolve(userData);
            _context2.next = 27;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 24]]);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(email) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].User.findOne({
              where: {
                Email: email
              }
            });
          case 3:
            user = _context3.sent;
            resolve(!!user);
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers() {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].User.findAll({
              attributes: {
                exclude: ['UserPassword']
              }
            });
          case 3:
            users = _context4.sent;
            resolve(users);
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getUserById = function getUserById(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index["default"].User.findOne({
              where: {
                UserId: userId
              },
              attributes: {
                exclude: ['UserPassword']
              }
            });
          case 3:
            user = _context5.sent;
            resolve(user);
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var createNewUser = function createNewUser(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var check, hashPassword;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return checkUserEmail(data.Email);
          case 3:
            check = _context6.sent;
            if (!check) {
              _context6.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Email is already in use. Please try another email!'
            });
            _context6.next = 14;
            break;
          case 8:
            _context6.next = 10;
            return hashUserPassword(data.UserPassword);
          case 10:
            hashPassword = _context6.sent;
            _context6.next = 13;
            return _index["default"].User.create({
              UserName: data.UserName,
              UserPassword: hashPassword,
              Email: data.Email,
              Phone: data.Phone,
              Role: data.Role || 'user',
              Address: data.Address
            });
          case 13:
            resolve({
              errCode: 0,
              message: 'User created successfully!'
            });
          case 14:
            _context6.next = 19;
            break;
          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 19:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 16]]);
    }));
    return function (_x10, _x11) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var updateUserData = function updateUserData(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (data.UserId) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return", resolve({
              errCode: 2,
              errMessage: "Missing required parameter"
            }));
          case 3:
            _context7.next = 5;
            return _index["default"].User.findOne({
              where: {
                UserId: data.UserId
              },
              raw: false
            });
          case 5:
            user = _context7.sent;
            if (!user) {
              _context7.next = 16;
              break;
            }
            user.UserName = data.UserName;
            user.Email = data.Email;
            user.Phone = data.Phone;
            user.Address = data.Address;
            _context7.next = 13;
            return user.save();
          case 13:
            resolve({
              errCode: 0,
              message: "User updated successfully!"
            });
            _context7.next = 17;
            break;
          case 16:
            resolve({
              errCode: 1,
              message: "User not found!"
            });
          case 17:
            _context7.next = 22;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 19]]);
    }));
    return function (_x12, _x13) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var deleteUser = function deleteUser(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].User.findOne({
              where: {
                UserId: userId
              }
            });
          case 3:
            user = _context8.sent;
            if (user) {
              _context8.next = 6;
              break;
            }
            return _context8.abrupt("return", resolve({
              errCode: 2,
              errMessage: "User does not exist"
            }));
          case 6:
            _context8.next = 8;
            return _index["default"].User.destroy({
              where: {
                UserId: userId
              }
            });
          case 8:
            resolve({
              errCode: 0,
              message: "User deleted successfully!"
            });
            _context8.next = 14;
            break;
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 11]]);
    }));
    return function (_x14, _x15) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var sendResetPasswordEmail = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(email) {
    var testAccount, transporter, resetLink, info;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _nodemailer["default"].createTestAccount();
        case 3:
          testAccount = _context9.sent;
          // Cấu hình SMTP dùng Ethereal
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass
            }
          });
          resetLink = "http://localhost:3000/reset-password?token=dummy_token";
          _context9.next = 8;
          return transporter.sendMail({
            from: '"Your App" <no-reply@example.com>',
            to: email,
            subject: "Password Reset Request",
            text: "Click v\xE0o link sau \u0111\u1EC3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u: ".concat(resetLink),
            html: "<p>B\u1EA1n \u0111\xE3 y\xEAu c\u1EA7u \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u. Nh\u1EA5n v\xE0o <a href=\"".concat(resetLink, "\">\u0111\xE2y</a> \u0111\u1EC3 ti\u1EBFp t\u1EE5c.</p>")
          });
        case 8:
          info = _context9.sent;
          console.log("Xem mail tại:", _nodemailer["default"].getTestMessageUrl(info));
          return _context9.abrupt("return", {
            errCode: 0,
            message: "Email đặt lại mật khẩu đã được gửi!",
            previewURL: _nodemailer["default"].getTestMessageUrl(info)
          });
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          console.error("Lỗi chi tiết:", _context9.t0);
          return _context9.abrupt("return", {
            errCode: 2,
            errMessage: "Lỗi hệ thống!",
            error: _context9.t0.message
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return function sendResetPasswordEmail(_x16) {
    return _ref9.apply(this, arguments);
  };
}();
var resetPassword = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(token, newPassword) {
    var decoded, user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          decoded = _jsonwebtoken["default"].verify(token, secretKey);
          _context10.next = 4;
          return _index["default"].User.findOne({
            where: {
              Email: decoded.email
            },
            raw: false
          });
        case 4:
          user = _context10.sent;
          if (user) {
            _context10.next = 8;
            break;
          }
          console.log("Không tìm thấy user trong DB!");
          return _context10.abrupt("return", {
            errCode: 1,
            errMessage: "User does not exist!"
          });
        case 8:
          if (user instanceof _index["default"].User) {
            _context10.next = 10;
            break;
          }
          return _context10.abrupt("return", {
            errCode: 2,
            errMessage: "Lỗi hệ thống!"
          });
        case 10:
          _context10.next = 12;
          return hashUserPassword(newPassword);
        case 12:
          user.UserPassword = _context10.sent;
          _context10.next = 15;
          return user.save();
        case 15:
          console.log("Mật khẩu đã cập nhật!");
          return _context10.abrupt("return", {
            errCode: 0,
            message: "Password updated successfully!"
          });
        case 19:
          _context10.prev = 19;
          _context10.t0 = _context10["catch"](0);
          console.error("Lỗi hệ thống:", _context10.t0);
          return _context10.abrupt("return", {
            errCode: 2,
            errMessage: "Lỗi hệ thống!"
          });
        case 23:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 19]]);
  }));
  return function resetPassword(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  createNewUser: createNewUser,
  updateUserData: updateUserData,
  deleteUser: deleteUser,
  sendResetPasswordEmail: sendResetPasswordEmail,
  resetPassword: resetPassword
};