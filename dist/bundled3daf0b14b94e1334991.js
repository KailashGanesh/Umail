/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popluateEmailList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popluateEmailList */ "./src/js/popluateEmailList.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getData(_x) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, emailData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(url);
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            emailData = _context.sent;
            // globals = emailData;
            // globals.emailData += emailData.inbox;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.inbox = emailData.inbox;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.sent = emailData.sent;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.starred = emailData.starred;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.drafts = emailData.drafts;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.trash = emailData.trash;
            return _context.abrupt("return", emailData);
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            alert('we got an unexpected error - please try later');
            console.log(_context.t0);
          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _getData.apply(this, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/js/globals.js":
/*!***************************!*\
  !*** ./src/js/globals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var globals = {
  'emailData': {
    'inbox': []
  },
  'activeSidebarMenu': '',
  'activeEmailList': ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globals);

/***/ }),

/***/ "./src/js/popluateEmailList.js":
/*!*************************************!*\
  !*** ./src/js/popluateEmailList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightElement": () => (/* binding */ highlightElement),
/* harmony export */   "popEmailList": () => (/* binding */ popEmailList),
/* harmony export */   "popEmailReader": () => (/* binding */ popEmailReader)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");

var popEmailList = function popEmailList(data, folderName) {
  var emailList = document.getElementById('email-list');
  var list = data[folderName];
  emailList.innerHTML = '';
  if (list.length == 0) {
    emailList.innerHTML = "No emails in this folder";
  }
  for (var i = 0; i < list.length; i++) {
    var attachment = list[i]['attachment'] ? "<svg class=\"va-middle fill-cool-gray\" height=\"15\" width=\"15\"> <use xlink:href=\"sprite.svg#icon-paperclip-solid\"></use> </svg>" : '';
    var reply = list[i]['reply'] ? "<svg class=\"va-middle fill-cool-gray\" height=\"20\" width=\"20\"> <use xlink:href=\"sprite.svg#icon-arrow-back-outline\"></use> </svg>" : '';
    var tag = '';
    if (list[i]['tag'].length > 1) {
      console.log(list[i]['tag']);
      tag = "<span class=\"tag--".concat(list[i]['tag'], " circle va-middle ml-1\"></span>");
    }
    emailList.innerHTML += "\n    <li class=\"email__item\" id=\"".concat(i, "\" data-folder=\"").concat(folderName, "\">\n        <div class=\"email__details\">\n            <p class=\"heading-sm email__subject clr-gunmetal\">").concat(list[i]['subject'], "</p>\n            <span class=\"fs-sm clr-gunmetal\">").concat(list[i]['time'], "</span>\n        </div>\n        <div class=\"email__details\">\n            <p class=\"fs-sm clr-cool-gray\">").concat(list[i]['name'], "</p>\n            <div>\n                ").concat(attachment, "\n                ").concat(reply, "\n                ").concat(tag, "\n            </div>\n        </div> \n    </li>\n    ");
  }
  var firstEmail = document.getElementById('0');
  highlightElement(firstEmail, 'emailList');
  popEmailReader(_globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData, firstEmail);
};
var popEmailReader = function popEmailReader(data, eventElement) {
  var emailReader = document.getElementById('email-reader');
  var index = eventElement.id;
  var folder = eventElement.dataset.folder;
  var attachment = '';

  // console.log(data, index)
  if (data[folder][index]['attachment']) {
    data[folder][index]['files'].forEach(function (element) {
      var fileType = element.slice(element.length - 3);
      console.log(fileType);
      if (fileType == 'pdf') {
        attachment += "<div class=\"attachment\"><svg width=\"20\" height=\"20\"><use xlink:href=\"#icon-file-pdf-solid\"></use></svg>".concat(element, "</div>");
      } else if (fileType == 'doc') {
        attachment += "<svg><use xlink:href=\"#icon-file-word-solid\"></use></svg><div class=\"attachment\">".concat(element, "</div>");
      }
      attachment += "<div class=\"attachment\">".concat(element, "</div>");
    });
  }
  emailReader.innerHTML = "\n<div class=\"email__header\">\n    <div class=\"d-flex ai-center jc-space-between\">\n        <img src=\"https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-1536x1536.jpeg\" alt=\"\"\n        style=\"border-radius: 50%;\" width=\"54\" height=\"54\">\n        <div class=\"ml-4\">\n            <p>".concat(data[folder][index]['subject'], "</p>\n            <div>\n                <span>From:</span>\n                <span>").concat(data[folder][index]['from'], "</span>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"btn-group--round\">\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"sprite.svg#icon-star\"></use>\n            </svg>\n        </button>\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"sprite.svg#icon-document-text\"></use>\n            </svg>\n        </button>\n        <button class=\"btn btn-clicked\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"sprite.svg#icon-trash-can\"></use>\n            </svg>\n        </button>\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"sprite.svg#icon-arrow-back-outline\"></use>\n            </svg>\n        </button>\n    </div>\n</div>\n\n<div class=\"email__body\"> \n    <p class=\"email__message\">").concat(data[folder][index]['message'], "</p>\n    \n    <div class=\"email__attachments\">").concat(attachment, "</div>\n</div>");
};
function highlightElement(element, parentElement) {
  switch (parentElement) {
    case 'sidebarMenu':
      if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeSidebarMenu) {
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeSidebarMenu.classList.remove('active');
      }
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeSidebarMenu = element;
      element.classList.add('active');
      break;
    case 'emailList':
      if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeEmailList) {
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeEmailList.classList.remove('active--email');
      }
      _globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeEmailList = element;
      element.classList.add('active--email');
      break;
  }

  // console.log('globals.activeSidebtn', globals.activeSidebarBtn)
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mr-1 {\n  margin-right: 4px;\n}\n\n.ml-1 {\n  margin-left: 4px;\n}\n\n.mt-1 {\n  margin-top: 4px;\n}\n\n.mb-1 {\n  margin-bottom: 4px;\n}\n\n.pr-1 {\n  padding-right: 4px;\n}\n\n.pl-1 {\n  padding-left: 4px;\n}\n\n.pt-1 {\n  padding-top: 4px;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.m-1 {\n  margin: 4px;\n}\n\n.p-1 {\n  padding: 4px;\n}\n\n.mr-2 {\n  margin-right: 8px;\n}\n\n.ml-2 {\n  margin-left: 8px;\n}\n\n.mt-2 {\n  margin-top: 8px;\n}\n\n.mb-2 {\n  margin-bottom: 8px;\n}\n\n.pr-2 {\n  padding-right: 8px;\n}\n\n.pl-2 {\n  padding-left: 8px;\n}\n\n.pt-2 {\n  padding-top: 8px;\n}\n\n.pb-2 {\n  padding-bottom: 8px;\n}\n\n.m-2 {\n  margin: 8px;\n}\n\n.p-2 {\n  padding: 8px;\n}\n\n.mr-3 {\n  margin-right: 12px;\n}\n\n.ml-3 {\n  margin-left: 12px;\n}\n\n.mt-3 {\n  margin-top: 12px;\n}\n\n.mb-3 {\n  margin-bottom: 12px;\n}\n\n.pr-3 {\n  padding-right: 12px;\n}\n\n.pl-3 {\n  padding-left: 12px;\n}\n\n.pt-3 {\n  padding-top: 12px;\n}\n\n.pb-3 {\n  padding-bottom: 12px;\n}\n\n.m-3 {\n  margin: 12px;\n}\n\n.p-3 {\n  padding: 12px;\n}\n\n.mr-4 {\n  margin-right: 16px;\n}\n\n.ml-4 {\n  margin-left: 16px;\n}\n\n.mt-4 {\n  margin-top: 16px;\n}\n\n.mb-4 {\n  margin-bottom: 16px;\n}\n\n.pr-4 {\n  padding-right: 16px;\n}\n\n.pl-4 {\n  padding-left: 16px;\n}\n\n.pt-4 {\n  padding-top: 16px;\n}\n\n.pb-4 {\n  padding-bottom: 16px;\n}\n\n.m-4 {\n  margin: 16px;\n}\n\n.p-4 {\n  padding: 16px;\n}\n\n.mr-5 {\n  margin-right: 20px;\n}\n\n.ml-5 {\n  margin-left: 20px;\n}\n\n.mt-5 {\n  margin-top: 20px;\n}\n\n.mb-5 {\n  margin-bottom: 20px;\n}\n\n.pr-5 {\n  padding-right: 20px;\n}\n\n.pl-5 {\n  padding-left: 20px;\n}\n\n.pt-5 {\n  padding-top: 20px;\n}\n\n.pb-5 {\n  padding-bottom: 20px;\n}\n\n.m-5 {\n  margin: 20px;\n}\n\n.p-5 {\n  padding: 20px;\n}\n\n.mr-6 {\n  margin-right: 24px;\n}\n\n.ml-6 {\n  margin-left: 24px;\n}\n\n.mt-6 {\n  margin-top: 24px;\n}\n\n.mb-6 {\n  margin-bottom: 24px;\n}\n\n.pr-6 {\n  padding-right: 24px;\n}\n\n.pl-6 {\n  padding-left: 24px;\n}\n\n.pt-6 {\n  padding-top: 24px;\n}\n\n.pb-6 {\n  padding-bottom: 24px;\n}\n\n.m-6 {\n  margin: 24px;\n}\n\n.p-6 {\n  padding: 24px;\n}\n\n.mr-7 {\n  margin-right: 28px;\n}\n\n.ml-7 {\n  margin-left: 28px;\n}\n\n.mt-7 {\n  margin-top: 28px;\n}\n\n.mb-7 {\n  margin-bottom: 28px;\n}\n\n.pr-7 {\n  padding-right: 28px;\n}\n\n.pl-7 {\n  padding-left: 28px;\n}\n\n.pt-7 {\n  padding-top: 28px;\n}\n\n.pb-7 {\n  padding-bottom: 28px;\n}\n\n.m-7 {\n  margin: 28px;\n}\n\n.p-7 {\n  padding: 28px;\n}\n\n.mr-8 {\n  margin-right: 32px;\n}\n\n.ml-8 {\n  margin-left: 32px;\n}\n\n.mt-8 {\n  margin-top: 32px;\n}\n\n.mb-8 {\n  margin-bottom: 32px;\n}\n\n.pr-8 {\n  padding-right: 32px;\n}\n\n.pl-8 {\n  padding-left: 32px;\n}\n\n.pt-8 {\n  padding-top: 32px;\n}\n\n.pb-8 {\n  padding-bottom: 32px;\n}\n\n.m-8 {\n  margin: 32px;\n}\n\n.p-8 {\n  padding: 32px;\n}\n\n.mr-9 {\n  margin-right: 36px;\n}\n\n.ml-9 {\n  margin-left: 36px;\n}\n\n.mt-9 {\n  margin-top: 36px;\n}\n\n.mb-9 {\n  margin-bottom: 36px;\n}\n\n.pr-9 {\n  padding-right: 36px;\n}\n\n.pl-9 {\n  padding-left: 36px;\n}\n\n.pt-9 {\n  padding-top: 36px;\n}\n\n.pb-9 {\n  padding-bottom: 36px;\n}\n\n.m-9 {\n  margin: 36px;\n}\n\n.p-9 {\n  padding: 36px;\n}\n\n.mr-10 {\n  margin-right: 40px;\n}\n\n.ml-10 {\n  margin-left: 40px;\n}\n\n.mt-10 {\n  margin-top: 40px;\n}\n\n.mb-10 {\n  margin-bottom: 40px;\n}\n\n.pr-10 {\n  padding-right: 40px;\n}\n\n.pl-10 {\n  padding-left: 40px;\n}\n\n.pt-10 {\n  padding-top: 40px;\n}\n\n.pb-10 {\n  padding-bottom: 40px;\n}\n\n.m-10 {\n  margin: 40px;\n}\n\n.p-10 {\n  padding: 40px;\n}\n\n.mr-11 {\n  margin-right: 44px;\n}\n\n.ml-11 {\n  margin-left: 44px;\n}\n\n.mt-11 {\n  margin-top: 44px;\n}\n\n.mb-11 {\n  margin-bottom: 44px;\n}\n\n.pr-11 {\n  padding-right: 44px;\n}\n\n.pl-11 {\n  padding-left: 44px;\n}\n\n.pt-11 {\n  padding-top: 44px;\n}\n\n.pb-11 {\n  padding-bottom: 44px;\n}\n\n.m-11 {\n  margin: 44px;\n}\n\n.p-11 {\n  padding: 44px;\n}\n\n.mr-12 {\n  margin-right: 48px;\n}\n\n.ml-12 {\n  margin-left: 48px;\n}\n\n.mt-12 {\n  margin-top: 48px;\n}\n\n.mb-12 {\n  margin-bottom: 48px;\n}\n\n.pr-12 {\n  padding-right: 48px;\n}\n\n.pl-12 {\n  padding-left: 48px;\n}\n\n.pt-12 {\n  padding-top: 48px;\n}\n\n.pb-12 {\n  padding-bottom: 48px;\n}\n\n.m-12 {\n  margin: 48px;\n}\n\n.p-12 {\n  padding: 48px;\n}\n\n.mr-13 {\n  margin-right: 52px;\n}\n\n.ml-13 {\n  margin-left: 52px;\n}\n\n.mt-13 {\n  margin-top: 52px;\n}\n\n.mb-13 {\n  margin-bottom: 52px;\n}\n\n.pr-13 {\n  padding-right: 52px;\n}\n\n.pl-13 {\n  padding-left: 52px;\n}\n\n.pt-13 {\n  padding-top: 52px;\n}\n\n.pb-13 {\n  padding-bottom: 52px;\n}\n\n.m-13 {\n  margin: 52px;\n}\n\n.p-13 {\n  padding: 52px;\n}\n\n.mr-14 {\n  margin-right: 56px;\n}\n\n.ml-14 {\n  margin-left: 56px;\n}\n\n.mt-14 {\n  margin-top: 56px;\n}\n\n.mb-14 {\n  margin-bottom: 56px;\n}\n\n.pr-14 {\n  padding-right: 56px;\n}\n\n.pl-14 {\n  padding-left: 56px;\n}\n\n.pt-14 {\n  padding-top: 56px;\n}\n\n.pb-14 {\n  padding-bottom: 56px;\n}\n\n.m-14 {\n  margin: 56px;\n}\n\n.p-14 {\n  padding: 56px;\n}\n\n.mr-15 {\n  margin-right: 60px;\n}\n\n.ml-15 {\n  margin-left: 60px;\n}\n\n.mt-15 {\n  margin-top: 60px;\n}\n\n.mb-15 {\n  margin-bottom: 60px;\n}\n\n.pr-15 {\n  padding-right: 60px;\n}\n\n.pl-15 {\n  padding-left: 60px;\n}\n\n.pt-15 {\n  padding-top: 60px;\n}\n\n.pb-15 {\n  padding-bottom: 60px;\n}\n\n.m-15 {\n  margin: 60px;\n}\n\n.p-15 {\n  padding: 60px;\n}\n\n.mr-16 {\n  margin-right: 64px;\n}\n\n.ml-16 {\n  margin-left: 64px;\n}\n\n.mt-16 {\n  margin-top: 64px;\n}\n\n.mb-16 {\n  margin-bottom: 64px;\n}\n\n.pr-16 {\n  padding-right: 64px;\n}\n\n.pl-16 {\n  padding-left: 64px;\n}\n\n.pt-16 {\n  padding-top: 64px;\n}\n\n.pb-16 {\n  padding-bottom: 64px;\n}\n\n.m-16 {\n  margin: 64px;\n}\n\n.p-16 {\n  padding: 64px;\n}\n\n.mr-17 {\n  margin-right: 68px;\n}\n\n.ml-17 {\n  margin-left: 68px;\n}\n\n.mt-17 {\n  margin-top: 68px;\n}\n\n.mb-17 {\n  margin-bottom: 68px;\n}\n\n.pr-17 {\n  padding-right: 68px;\n}\n\n.pl-17 {\n  padding-left: 68px;\n}\n\n.pt-17 {\n  padding-top: 68px;\n}\n\n.pb-17 {\n  padding-bottom: 68px;\n}\n\n.m-17 {\n  margin: 68px;\n}\n\n.p-17 {\n  padding: 68px;\n}\n\n.mr-18 {\n  margin-right: 72px;\n}\n\n.ml-18 {\n  margin-left: 72px;\n}\n\n.mt-18 {\n  margin-top: 72px;\n}\n\n.mb-18 {\n  margin-bottom: 72px;\n}\n\n.pr-18 {\n  padding-right: 72px;\n}\n\n.pl-18 {\n  padding-left: 72px;\n}\n\n.pt-18 {\n  padding-top: 72px;\n}\n\n.pb-18 {\n  padding-bottom: 72px;\n}\n\n.m-18 {\n  margin: 72px;\n}\n\n.p-18 {\n  padding: 72px;\n}\n\n.mr-19 {\n  margin-right: 76px;\n}\n\n.ml-19 {\n  margin-left: 76px;\n}\n\n.mt-19 {\n  margin-top: 76px;\n}\n\n.mb-19 {\n  margin-bottom: 76px;\n}\n\n.pr-19 {\n  padding-right: 76px;\n}\n\n.pl-19 {\n  padding-left: 76px;\n}\n\n.pt-19 {\n  padding-top: 76px;\n}\n\n.pb-19 {\n  padding-bottom: 76px;\n}\n\n.m-19 {\n  margin: 76px;\n}\n\n.p-19 {\n  padding: 76px;\n}\n\n.mr-20 {\n  margin-right: 80px;\n}\n\n.ml-20 {\n  margin-left: 80px;\n}\n\n.mt-20 {\n  margin-top: 80px;\n}\n\n.mb-20 {\n  margin-bottom: 80px;\n}\n\n.pr-20 {\n  padding-right: 80px;\n}\n\n.pl-20 {\n  padding-left: 80px;\n}\n\n.pt-20 {\n  padding-top: 80px;\n}\n\n.pb-20 {\n  padding-bottom: 80px;\n}\n\n.m-20 {\n  margin: 80px;\n}\n\n.p-20 {\n  padding: 80px;\n}\n\n.mr-21 {\n  margin-right: 84px;\n}\n\n.ml-21 {\n  margin-left: 84px;\n}\n\n.mt-21 {\n  margin-top: 84px;\n}\n\n.mb-21 {\n  margin-bottom: 84px;\n}\n\n.pr-21 {\n  padding-right: 84px;\n}\n\n.pl-21 {\n  padding-left: 84px;\n}\n\n.pt-21 {\n  padding-top: 84px;\n}\n\n.pb-21 {\n  padding-bottom: 84px;\n}\n\n.m-21 {\n  margin: 84px;\n}\n\n.p-21 {\n  padding: 84px;\n}\n\n.mr-22 {\n  margin-right: 88px;\n}\n\n.ml-22 {\n  margin-left: 88px;\n}\n\n.mt-22 {\n  margin-top: 88px;\n}\n\n.mb-22 {\n  margin-bottom: 88px;\n}\n\n.pr-22 {\n  padding-right: 88px;\n}\n\n.pl-22 {\n  padding-left: 88px;\n}\n\n.pt-22 {\n  padding-top: 88px;\n}\n\n.pb-22 {\n  padding-bottom: 88px;\n}\n\n.m-22 {\n  margin: 88px;\n}\n\n.p-22 {\n  padding: 88px;\n}\n\n.mr-23 {\n  margin-right: 92px;\n}\n\n.ml-23 {\n  margin-left: 92px;\n}\n\n.mt-23 {\n  margin-top: 92px;\n}\n\n.mb-23 {\n  margin-bottom: 92px;\n}\n\n.pr-23 {\n  padding-right: 92px;\n}\n\n.pl-23 {\n  padding-left: 92px;\n}\n\n.pt-23 {\n  padding-top: 92px;\n}\n\n.pb-23 {\n  padding-bottom: 92px;\n}\n\n.m-23 {\n  margin: 92px;\n}\n\n.p-23 {\n  padding: 92px;\n}\n\n.mr-24 {\n  margin-right: 96px;\n}\n\n.ml-24 {\n  margin-left: 96px;\n}\n\n.mt-24 {\n  margin-top: 96px;\n}\n\n.mb-24 {\n  margin-bottom: 96px;\n}\n\n.pr-24 {\n  padding-right: 96px;\n}\n\n.pl-24 {\n  padding-left: 96px;\n}\n\n.pt-24 {\n  padding-top: 96px;\n}\n\n.pb-24 {\n  padding-bottom: 96px;\n}\n\n.m-24 {\n  margin: 96px;\n}\n\n.p-24 {\n  padding: 96px;\n}\n\n.mr-25 {\n  margin-right: 100px;\n}\n\n.ml-25 {\n  margin-left: 100px;\n}\n\n.mt-25 {\n  margin-top: 100px;\n}\n\n.mb-25 {\n  margin-bottom: 100px;\n}\n\n.pr-25 {\n  padding-right: 100px;\n}\n\n.pl-25 {\n  padding-left: 100px;\n}\n\n.pt-25 {\n  padding-top: 100px;\n}\n\n.pb-25 {\n  padding-bottom: 100px;\n}\n\n.m-25 {\n  margin: 100px;\n}\n\n.p-25 {\n  padding: 100px;\n}\n\n.mr-26 {\n  margin-right: 104px;\n}\n\n.ml-26 {\n  margin-left: 104px;\n}\n\n.mt-26 {\n  margin-top: 104px;\n}\n\n.mb-26 {\n  margin-bottom: 104px;\n}\n\n.pr-26 {\n  padding-right: 104px;\n}\n\n.pl-26 {\n  padding-left: 104px;\n}\n\n.pt-26 {\n  padding-top: 104px;\n}\n\n.pb-26 {\n  padding-bottom: 104px;\n}\n\n.m-26 {\n  margin: 104px;\n}\n\n.p-26 {\n  padding: 104px;\n}\n\n.mr-27 {\n  margin-right: 108px;\n}\n\n.ml-27 {\n  margin-left: 108px;\n}\n\n.mt-27 {\n  margin-top: 108px;\n}\n\n.mb-27 {\n  margin-bottom: 108px;\n}\n\n.pr-27 {\n  padding-right: 108px;\n}\n\n.pl-27 {\n  padding-left: 108px;\n}\n\n.pt-27 {\n  padding-top: 108px;\n}\n\n.pb-27 {\n  padding-bottom: 108px;\n}\n\n.m-27 {\n  margin: 108px;\n}\n\n.p-27 {\n  padding: 108px;\n}\n\n.mr-28 {\n  margin-right: 112px;\n}\n\n.ml-28 {\n  margin-left: 112px;\n}\n\n.mt-28 {\n  margin-top: 112px;\n}\n\n.mb-28 {\n  margin-bottom: 112px;\n}\n\n.pr-28 {\n  padding-right: 112px;\n}\n\n.pl-28 {\n  padding-left: 112px;\n}\n\n.pt-28 {\n  padding-top: 112px;\n}\n\n.pb-28 {\n  padding-bottom: 112px;\n}\n\n.m-28 {\n  margin: 112px;\n}\n\n.p-28 {\n  padding: 112px;\n}\n\n.mr-29 {\n  margin-right: 116px;\n}\n\n.ml-29 {\n  margin-left: 116px;\n}\n\n.mt-29 {\n  margin-top: 116px;\n}\n\n.mb-29 {\n  margin-bottom: 116px;\n}\n\n.pr-29 {\n  padding-right: 116px;\n}\n\n.pl-29 {\n  padding-left: 116px;\n}\n\n.pt-29 {\n  padding-top: 116px;\n}\n\n.pb-29 {\n  padding-bottom: 116px;\n}\n\n.m-29 {\n  margin: 116px;\n}\n\n.p-29 {\n  padding: 116px;\n}\n\n.mr-30 {\n  margin-right: 120px;\n}\n\n.ml-30 {\n  margin-left: 120px;\n}\n\n.mt-30 {\n  margin-top: 120px;\n}\n\n.mb-30 {\n  margin-bottom: 120px;\n}\n\n.pr-30 {\n  padding-right: 120px;\n}\n\n.pl-30 {\n  padding-left: 120px;\n}\n\n.pt-30 {\n  padding-top: 120px;\n}\n\n.pb-30 {\n  padding-bottom: 120px;\n}\n\n.m-30 {\n  margin: 120px;\n}\n\n.p-30 {\n  padding: 120px;\n}\n\n.mr-31 {\n  margin-right: 124px;\n}\n\n.ml-31 {\n  margin-left: 124px;\n}\n\n.mt-31 {\n  margin-top: 124px;\n}\n\n.mb-31 {\n  margin-bottom: 124px;\n}\n\n.pr-31 {\n  padding-right: 124px;\n}\n\n.pl-31 {\n  padding-left: 124px;\n}\n\n.pt-31 {\n  padding-top: 124px;\n}\n\n.pb-31 {\n  padding-bottom: 124px;\n}\n\n.m-31 {\n  margin: 124px;\n}\n\n.p-31 {\n  padding: 124px;\n}\n\n.mr-32 {\n  margin-right: 128px;\n}\n\n.ml-32 {\n  margin-left: 128px;\n}\n\n.mt-32 {\n  margin-top: 128px;\n}\n\n.mb-32 {\n  margin-bottom: 128px;\n}\n\n.pr-32 {\n  padding-right: 128px;\n}\n\n.pl-32 {\n  padding-left: 128px;\n}\n\n.pt-32 {\n  padding-top: 128px;\n}\n\n.pb-32 {\n  padding-bottom: 128px;\n}\n\n.m-32 {\n  margin: 128px;\n}\n\n.p-32 {\n  padding: 128px;\n}\n\n.mr-33 {\n  margin-right: 132px;\n}\n\n.ml-33 {\n  margin-left: 132px;\n}\n\n.mt-33 {\n  margin-top: 132px;\n}\n\n.mb-33 {\n  margin-bottom: 132px;\n}\n\n.pr-33 {\n  padding-right: 132px;\n}\n\n.pl-33 {\n  padding-left: 132px;\n}\n\n.pt-33 {\n  padding-top: 132px;\n}\n\n.pb-33 {\n  padding-bottom: 132px;\n}\n\n.m-33 {\n  margin: 132px;\n}\n\n.p-33 {\n  padding: 132px;\n}\n\n.mr-34 {\n  margin-right: 136px;\n}\n\n.ml-34 {\n  margin-left: 136px;\n}\n\n.mt-34 {\n  margin-top: 136px;\n}\n\n.mb-34 {\n  margin-bottom: 136px;\n}\n\n.pr-34 {\n  padding-right: 136px;\n}\n\n.pl-34 {\n  padding-left: 136px;\n}\n\n.pt-34 {\n  padding-top: 136px;\n}\n\n.pb-34 {\n  padding-bottom: 136px;\n}\n\n.m-34 {\n  margin: 136px;\n}\n\n.p-34 {\n  padding: 136px;\n}\n\n.mr-35 {\n  margin-right: 140px;\n}\n\n.ml-35 {\n  margin-left: 140px;\n}\n\n.mt-35 {\n  margin-top: 140px;\n}\n\n.mb-35 {\n  margin-bottom: 140px;\n}\n\n.pr-35 {\n  padding-right: 140px;\n}\n\n.pl-35 {\n  padding-left: 140px;\n}\n\n.pt-35 {\n  padding-top: 140px;\n}\n\n.pb-35 {\n  padding-bottom: 140px;\n}\n\n.m-35 {\n  margin: 140px;\n}\n\n.p-35 {\n  padding: 140px;\n}\n\n.mr-36 {\n  margin-right: 144px;\n}\n\n.ml-36 {\n  margin-left: 144px;\n}\n\n.mt-36 {\n  margin-top: 144px;\n}\n\n.mb-36 {\n  margin-bottom: 144px;\n}\n\n.pr-36 {\n  padding-right: 144px;\n}\n\n.pl-36 {\n  padding-left: 144px;\n}\n\n.pt-36 {\n  padding-top: 144px;\n}\n\n.pb-36 {\n  padding-bottom: 144px;\n}\n\n.m-36 {\n  margin: 144px;\n}\n\n.p-36 {\n  padding: 144px;\n}\n\n.mr-37 {\n  margin-right: 148px;\n}\n\n.ml-37 {\n  margin-left: 148px;\n}\n\n.mt-37 {\n  margin-top: 148px;\n}\n\n.mb-37 {\n  margin-bottom: 148px;\n}\n\n.pr-37 {\n  padding-right: 148px;\n}\n\n.pl-37 {\n  padding-left: 148px;\n}\n\n.pt-37 {\n  padding-top: 148px;\n}\n\n.pb-37 {\n  padding-bottom: 148px;\n}\n\n.m-37 {\n  margin: 148px;\n}\n\n.p-37 {\n  padding: 148px;\n}\n\n.mr-38 {\n  margin-right: 152px;\n}\n\n.ml-38 {\n  margin-left: 152px;\n}\n\n.mt-38 {\n  margin-top: 152px;\n}\n\n.mb-38 {\n  margin-bottom: 152px;\n}\n\n.pr-38 {\n  padding-right: 152px;\n}\n\n.pl-38 {\n  padding-left: 152px;\n}\n\n.pt-38 {\n  padding-top: 152px;\n}\n\n.pb-38 {\n  padding-bottom: 152px;\n}\n\n.m-38 {\n  margin: 152px;\n}\n\n.p-38 {\n  padding: 152px;\n}\n\n.mr-39 {\n  margin-right: 156px;\n}\n\n.ml-39 {\n  margin-left: 156px;\n}\n\n.mt-39 {\n  margin-top: 156px;\n}\n\n.mb-39 {\n  margin-bottom: 156px;\n}\n\n.pr-39 {\n  padding-right: 156px;\n}\n\n.pl-39 {\n  padding-left: 156px;\n}\n\n.pt-39 {\n  padding-top: 156px;\n}\n\n.pb-39 {\n  padding-bottom: 156px;\n}\n\n.m-39 {\n  margin: 156px;\n}\n\n.p-39 {\n  padding: 156px;\n}\n\n.mr-40 {\n  margin-right: 160px;\n}\n\n.ml-40 {\n  margin-left: 160px;\n}\n\n.mt-40 {\n  margin-top: 160px;\n}\n\n.mb-40 {\n  margin-bottom: 160px;\n}\n\n.pr-40 {\n  padding-right: 160px;\n}\n\n.pl-40 {\n  padding-left: 160px;\n}\n\n.pt-40 {\n  padding-top: 160px;\n}\n\n.pb-40 {\n  padding-bottom: 160px;\n}\n\n.m-40 {\n  margin: 160px;\n}\n\n.p-40 {\n  padding: 160px;\n}\n\n.mr-41 {\n  margin-right: 164px;\n}\n\n.ml-41 {\n  margin-left: 164px;\n}\n\n.mt-41 {\n  margin-top: 164px;\n}\n\n.mb-41 {\n  margin-bottom: 164px;\n}\n\n.pr-41 {\n  padding-right: 164px;\n}\n\n.pl-41 {\n  padding-left: 164px;\n}\n\n.pt-41 {\n  padding-top: 164px;\n}\n\n.pb-41 {\n  padding-bottom: 164px;\n}\n\n.m-41 {\n  margin: 164px;\n}\n\n.p-41 {\n  padding: 164px;\n}\n\n.mr-42 {\n  margin-right: 168px;\n}\n\n.ml-42 {\n  margin-left: 168px;\n}\n\n.mt-42 {\n  margin-top: 168px;\n}\n\n.mb-42 {\n  margin-bottom: 168px;\n}\n\n.pr-42 {\n  padding-right: 168px;\n}\n\n.pl-42 {\n  padding-left: 168px;\n}\n\n.pt-42 {\n  padding-top: 168px;\n}\n\n.pb-42 {\n  padding-bottom: 168px;\n}\n\n.m-42 {\n  margin: 168px;\n}\n\n.p-42 {\n  padding: 168px;\n}\n\n.mr-43 {\n  margin-right: 172px;\n}\n\n.ml-43 {\n  margin-left: 172px;\n}\n\n.mt-43 {\n  margin-top: 172px;\n}\n\n.mb-43 {\n  margin-bottom: 172px;\n}\n\n.pr-43 {\n  padding-right: 172px;\n}\n\n.pl-43 {\n  padding-left: 172px;\n}\n\n.pt-43 {\n  padding-top: 172px;\n}\n\n.pb-43 {\n  padding-bottom: 172px;\n}\n\n.m-43 {\n  margin: 172px;\n}\n\n.p-43 {\n  padding: 172px;\n}\n\n.mr-44 {\n  margin-right: 176px;\n}\n\n.ml-44 {\n  margin-left: 176px;\n}\n\n.mt-44 {\n  margin-top: 176px;\n}\n\n.mb-44 {\n  margin-bottom: 176px;\n}\n\n.pr-44 {\n  padding-right: 176px;\n}\n\n.pl-44 {\n  padding-left: 176px;\n}\n\n.pt-44 {\n  padding-top: 176px;\n}\n\n.pb-44 {\n  padding-bottom: 176px;\n}\n\n.m-44 {\n  margin: 176px;\n}\n\n.p-44 {\n  padding: 176px;\n}\n\n.mr-45 {\n  margin-right: 180px;\n}\n\n.ml-45 {\n  margin-left: 180px;\n}\n\n.mt-45 {\n  margin-top: 180px;\n}\n\n.mb-45 {\n  margin-bottom: 180px;\n}\n\n.pr-45 {\n  padding-right: 180px;\n}\n\n.pl-45 {\n  padding-left: 180px;\n}\n\n.pt-45 {\n  padding-top: 180px;\n}\n\n.pb-45 {\n  padding-bottom: 180px;\n}\n\n.m-45 {\n  margin: 180px;\n}\n\n.p-45 {\n  padding: 180px;\n}\n\n.mr-46 {\n  margin-right: 184px;\n}\n\n.ml-46 {\n  margin-left: 184px;\n}\n\n.mt-46 {\n  margin-top: 184px;\n}\n\n.mb-46 {\n  margin-bottom: 184px;\n}\n\n.pr-46 {\n  padding-right: 184px;\n}\n\n.pl-46 {\n  padding-left: 184px;\n}\n\n.pt-46 {\n  padding-top: 184px;\n}\n\n.pb-46 {\n  padding-bottom: 184px;\n}\n\n.m-46 {\n  margin: 184px;\n}\n\n.p-46 {\n  padding: 184px;\n}\n\n.mr-47 {\n  margin-right: 188px;\n}\n\n.ml-47 {\n  margin-left: 188px;\n}\n\n.mt-47 {\n  margin-top: 188px;\n}\n\n.mb-47 {\n  margin-bottom: 188px;\n}\n\n.pr-47 {\n  padding-right: 188px;\n}\n\n.pl-47 {\n  padding-left: 188px;\n}\n\n.pt-47 {\n  padding-top: 188px;\n}\n\n.pb-47 {\n  padding-bottom: 188px;\n}\n\n.m-47 {\n  margin: 188px;\n}\n\n.p-47 {\n  padding: 188px;\n}\n\n.mr-48 {\n  margin-right: 192px;\n}\n\n.ml-48 {\n  margin-left: 192px;\n}\n\n.mt-48 {\n  margin-top: 192px;\n}\n\n.mb-48 {\n  margin-bottom: 192px;\n}\n\n.pr-48 {\n  padding-right: 192px;\n}\n\n.pl-48 {\n  padding-left: 192px;\n}\n\n.pt-48 {\n  padding-top: 192px;\n}\n\n.pb-48 {\n  padding-bottom: 192px;\n}\n\n.m-48 {\n  margin: 192px;\n}\n\n.p-48 {\n  padding: 192px;\n}\n\n.mr-49 {\n  margin-right: 196px;\n}\n\n.ml-49 {\n  margin-left: 196px;\n}\n\n.mt-49 {\n  margin-top: 196px;\n}\n\n.mb-49 {\n  margin-bottom: 196px;\n}\n\n.pr-49 {\n  padding-right: 196px;\n}\n\n.pl-49 {\n  padding-left: 196px;\n}\n\n.pt-49 {\n  padding-top: 196px;\n}\n\n.pb-49 {\n  padding-bottom: 196px;\n}\n\n.m-49 {\n  margin: 196px;\n}\n\n.p-49 {\n  padding: 196px;\n}\n\n.mr-50 {\n  margin-right: 200px;\n}\n\n.ml-50 {\n  margin-left: 200px;\n}\n\n.mt-50 {\n  margin-top: 200px;\n}\n\n.mb-50 {\n  margin-bottom: 200px;\n}\n\n.pr-50 {\n  padding-right: 200px;\n}\n\n.pl-50 {\n  padding-left: 200px;\n}\n\n.pt-50 {\n  padding-top: 200px;\n}\n\n.pb-50 {\n  padding-bottom: 200px;\n}\n\n.m-50 {\n  margin: 200px;\n}\n\n.p-50 {\n  padding: 200px;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.clear-fix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.m-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ta-l {\n  text-align: left;\n}\n\n.ta-c {\n  text-align: center;\n}\n\n.ta-r {\n  text-align: right;\n}\n\n.va-top {\n  vertical-align: top;\n}\n\n.va-middle {\n  vertical-align: middle;\n}\n\n.fs-reset {\n  font-size: 0;\n}\n\n.wd-fc {\n  width: fit-content;\n}\n\n.tt-uppercase {\n  text-transform: uppercase;\n}\n\n.lh-1 {\n  line-height: 1;\n}\n\n.br-4 {\n  border-radius: 4px;\n}\n\n.br-6 {\n  border-radius: 6px;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-iblock {\n  display: inline-block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.flex-direction-col {\n  flex-direction: column;\n}\n\n.jc-center {\n  justify-content: center;\n}\n\n.jc-space-between {\n  justify-content: space-between;\n}\n\n.ai-start {\n  align-items: flex-start;\n}\n\n.ai-center {\n  align-items: center;\n}\n\n.clr-gunmetal {\n  color: #4c4f59;\n}\n\n.clr-cool-gray {\n  color: #a3a3a8;\n}\n\n.fill-cool-gray {\n  fill: #a3a3a8;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nul, ol {\n  list-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbody {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 100%;\n}\n\nh1, h2, h3, .heading {\n  font-weight: 700;\n}\n\na, a:visited, a:active {\n  text-decoration: none;\n}\n\n.heading-lg {\n  font-size: 18px;\n  line-height: normal;\n}\n\n.heading-md {\n  font-size: 16px;\n  line-height: normal;\n}\n\n.heading-sm {\n  font-size: 15px;\n  line-height: normal;\n}\n\n.fs-lg {\n  font-size: 14px;\n  line-height: normal;\n}\n\n.fs-md {\n  font-size: 13px;\n  line-height: normal;\n}\n\n.fs-sm {\n  font-size: 12px;\n  line-height: normal;\n}\n\n.clr-steel {\n  color: #8e8e93;\n}\n\n.fw-300 {\n  font-weight: 300;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n.wrapper {\n  display: flex;\n  background-color: #ffffff;\n}\n\n.btn {\n  display: inline-block;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 150ms ease-in-out;\n}\n.btn-blue {\n  background-color: #007aff;\n  color: #ffffff;\n  padding: 10px 40px;\n  border-radius: 2px;\n  font-weight: 300;\n}\n.btn-blue:hover {\n  background-color: #0c29e6;\n}\n.btn-white {\n  background-color: #ffffff;\n  color: #000000;\n  padding: 10px 10px;\n  border-radius: 2px;\n  font-weight: 300;\n}\n.btn-white:hover {\n  background-color: #0c29e6;\n}\n.btn__icon {\n  height: 20px;\n  width: 20px;\n}\n\n.btn-group--round {\n  display: inline-flex;\n  border: 1px solid #8e8e93;\n  border-radius: 17px;\n  height: 34px;\n}\n.btn-group--round .btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  border: 1px solid #ededed;\n  padding: 5px;\n}\n.btn-group--round .btn:hover {\n  background-color: #ededed;\n  background-color: #007aff;\n  border: 1px solid #007aff;\n}\n.btn-group--round .btn:hover .btn__icon {\n  fill: white;\n}\n.btn-group--round .btn__icon {\n  fill: #8e8e93;\n}\n.btn-group--round .btn:first-child {\n  border-top-left-radius: 17px;\n  border-bottom-left-radius: 17px;\n  padding-left: 8px;\n}\n.btn-group--round .btn:last-child {\n  border-top-right-radius: 17px;\n  border-bottom-right-radius: 17px;\n  padding-right: 8px;\n}\n\n.btn-group--sqr {\n  display: inline-flex;\n  background-color: #f9f9f9;\n}\n.btn-group--sqr .btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 110px;\n  width: 100%;\n  height: 60px;\n}\n.btn-group--sqr .btn:not(:last-child) {\n  border-right: 1px solid #e6e4e4;\n}\n.btn-group--sqr .btn:hover {\n  background-color: #d4cfcf;\n}\n\n.select {\n  background-color: #ececec;\n  border-radius: 5px;\n}\n.select__dropdown {\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  color: #000000;\n  background-color: #ececec;\n  border: none;\n  outline: none;\n}\n.select__label {\n  display: block;\n  font-size: 14px;\n  color: #999999;\n}\n\n.input {\n  position: relative;\n}\n.input__felid {\n  border-radius: 15px;\n  outline: none;\n  border: none;\n  border: 1px solid #8e8e93;\n  background-color: #ffffff;\n  min-width: 294px;\n  height: 30px;\n  padding-left: 35px;\n}\n.input__icon {\n  fill: #000000;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.input .input__icon + .input__icon {\n  left: 25px;\n  width: 8px;\n  height: 8px;\n}\n\n.tag--archives, .tag--friends, .tag--family, .tag--clients, .tag--personal {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: 3px solid;\n  vertical-align: middle;\n}\n\n.tag--personal {\n  margin-left: 4px;\n  border-color: #9200ff;\n}\n\n.tag--clients {\n  margin-left: 4px;\n  border-color: #ff7100;\n}\n\n.tag--family {\n  margin-left: 4px;\n  border-color: #d0dc00;\n}\n\n.tag--friends {\n  margin-left: 4px;\n  border-color: #00dcff;\n}\n\n.tag--archives {\n  margin-left: 4px;\n  border-color: #6f6e74;\n}\n\n.circle {\n  width: 9px;\n  height: 9px;\n  border-width: 5px;\n  border-radius: 50%;\n  margin-left: 0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 30px;\n  background-color: #ffffff;\n  min-height: 60px;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  letter-spacing: 2px;\n}\n.header__logo .logo-U {\n  display: inline-block;\n  background-color: black;\n  height: 20px;\n  width: 15px;\n  border-bottom-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  margin-right: 2px;\n}\n\n.sidebar {\n  background-color: #ffffff;\n  color: #8e8e93;\n  height: calc(100vh - 60px);\n  width: 220px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sidebar__btn {\n  display: block;\n  background-color: transparent;\n  color: #8e8e93;\n  font-size: 14px;\n  width: 100%;\n  text-align: left;\n  padding-left: 16px;\n  padding-bottom: 4px;\n}\n.sidebar__btn:hover {\n  background-color: rgba(142, 142, 147, 0.19);\n}\n.sidebar .btn__icon {\n  fill: #8e8e93;\n}\n.sidebar .active {\n  background-color: rgba(142, 142, 147, 0.19);\n  color: #007aff;\n}\n.sidebar .active .btn__icon {\n  fill: #007aff;\n}\n\n.email {\n  width: 90%;\n  width: calc(100% - 220px);\n}\n.email__list {\n  height: calc(100vh - 60px);\n  width: 40%;\n  max-width: 334px;\n  min-width: 334px;\n  background-color: #ffffff;\n  overflow-y: auto;\n}\n.email__item {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 20px;\n  border-bottom: 1px solid #ededed;\n  border-left: 3px solid transparent;\n  cursor: pointer;\n}\n.email__item:hover {\n  background-color: rgba(142, 142, 147, 0.05);\n}\n.email .active--email {\n  border-left: 3px solid #007aff;\n  background-color: rgba(142, 142, 147, 0.5);\n  background-color: rgba(142, 142, 147, 0.05);\n}\n.email__details {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.email__subject {\n  max-width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.email__reader {\n  height: calc(100vh - 60px);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.email__header {\n  background-color: #ffffff;\n  flex-basis: 130px;\n  display: flex;\n  justify-content: space-between;\n  /* width: 100%; */\n  align-items: center;\n  padding: 40px 30px;\n  position: relative;\n}\n.email__header::after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 90%;\n  border-bottom: 1px solid #eceff3;\n  position: absolute;\n  bottom: 0;\n}\n.email__body {\n  background-color: #ffffff;\n  color: #65676e;\n  flex-grow: 1;\n  padding: 30px;\n  white-space: pre-line;\n}\n.email__attachments {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.email .attachment {\n  display: inline-block;\n  background-color: #f5f5f5;\n  border: 1px solid #e5e5e5;\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles/utilities/_mixins.scss","webpack://./src/styles/main.scss","webpack://./src/styles/utilities/_helpers.scss","webpack://./src/styles/utilities/_variables.scss","webpack://./src/styles/base/_reset.scss","webpack://./src/styles/base/_typography.scss","webpack://./src/styles/base/_base.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/components/_select.scss","webpack://./src/styles/components/_textfelid.scss","webpack://./src/styles/components/_tags.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_sidebar.scss","webpack://./src/styles/layout/_other.scss"],"names":[],"mappings":"AAoBQ;EACI,iBAAA;AClBZ;;ADoBQ;EACI,gBAAA;ACjBZ;;ADmBQ;EACI,eAAA;AChBZ;;ADkBQ;EACI,kBAAA;ACfZ;;ADiBQ;EACI,kBAAA;ACdZ;;ADgBQ;EACI,iBAAA;ACbZ;;ADeQ;EACG,gBAAA;ACZX;;ADcQ;EACI,mBAAA;ACXZ;;ADcQ;EACI,WAAA;ACXZ;;ADaQ;EACI,YAAA;ACVZ;;ADnBQ;EACI,iBAAA;ACsBZ;;ADpBQ;EACI,gBAAA;ACuBZ;;ADrBQ;EACI,eAAA;ACwBZ;;ADtBQ;EACI,kBAAA;ACyBZ;;ADvBQ;EACI,kBAAA;AC0BZ;;ADxBQ;EACI,iBAAA;AC2BZ;;ADzBQ;EACG,gBAAA;AC4BX;;AD1BQ;EACI,mBAAA;AC6BZ;;AD1BQ;EACI,WAAA;AC6BZ;;AD3BQ;EACI,YAAA;AC8BZ;;AD3DQ;EACI,kBAAA;AC8DZ;;AD5DQ;EACI,iBAAA;AC+DZ;;AD7DQ;EACI,gBAAA;ACgEZ;;AD9DQ;EACI,mBAAA;ACiEZ;;AD/DQ;EACI,mBAAA;ACkEZ;;ADhEQ;EACI,kBAAA;ACmEZ;;ADjEQ;EACG,iBAAA;ACoEX;;ADlEQ;EACI,oBAAA;ACqEZ;;ADlEQ;EACI,YAAA;ACqEZ;;ADnEQ;EACI,aAAA;ACsEZ;;ADnGQ;EACI,kBAAA;ACsGZ;;ADpGQ;EACI,iBAAA;ACuGZ;;ADrGQ;EACI,gBAAA;ACwGZ;;ADtGQ;EACI,mBAAA;ACyGZ;;ADvGQ;EACI,mBAAA;AC0GZ;;ADxGQ;EACI,kBAAA;AC2GZ;;ADzGQ;EACG,iBAAA;AC4GX;;AD1GQ;EACI,oBAAA;AC6GZ;;AD1GQ;EACI,YAAA;AC6GZ;;AD3GQ;EACI,aAAA;AC8GZ;;AD3IQ;EACI,kBAAA;AC8IZ;;AD5IQ;EACI,iBAAA;AC+IZ;;AD7IQ;EACI,gBAAA;ACgJZ;;AD9IQ;EACI,mBAAA;ACiJZ;;AD/IQ;EACI,mBAAA;ACkJZ;;ADhJQ;EACI,kBAAA;ACmJZ;;ADjJQ;EACG,iBAAA;ACoJX;;ADlJQ;EACI,oBAAA;ACqJZ;;ADlJQ;EACI,YAAA;ACqJZ;;ADnJQ;EACI,aAAA;ACsJZ;;ADnLQ;EACI,kBAAA;ACsLZ;;ADpLQ;EACI,iBAAA;ACuLZ;;ADrLQ;EACI,gBAAA;ACwLZ;;ADtLQ;EACI,mBAAA;ACyLZ;;ADvLQ;EACI,mBAAA;AC0LZ;;ADxLQ;EACI,kBAAA;AC2LZ;;ADzLQ;EACG,iBAAA;AC4LX;;AD1LQ;EACI,oBAAA;AC6LZ;;AD1LQ;EACI,YAAA;AC6LZ;;AD3LQ;EACI,aAAA;AC8LZ;;AD3NQ;EACI,kBAAA;AC8NZ;;AD5NQ;EACI,iBAAA;AC+NZ;;AD7NQ;EACI,gBAAA;ACgOZ;;AD9NQ;EACI,mBAAA;ACiOZ;;AD/NQ;EACI,mBAAA;ACkOZ;;ADhOQ;EACI,kBAAA;ACmOZ;;ADjOQ;EACG,iBAAA;ACoOX;;ADlOQ;EACI,oBAAA;ACqOZ;;ADlOQ;EACI,YAAA;ACqOZ;;ADnOQ;EACI,aAAA;ACsOZ;;ADnQQ;EACI,kBAAA;ACsQZ;;ADpQQ;EACI,iBAAA;ACuQZ;;ADrQQ;EACI,gBAAA;ACwQZ;;ADtQQ;EACI,mBAAA;ACyQZ;;ADvQQ;EACI,mBAAA;AC0QZ;;ADxQQ;EACI,kBAAA;AC2QZ;;ADzQQ;EACG,iBAAA;AC4QX;;AD1QQ;EACI,oBAAA;AC6QZ;;AD1QQ;EACI,YAAA;AC6QZ;;AD3QQ;EACI,aAAA;AC8QZ;;AD3SQ;EACI,kBAAA;AC8SZ;;AD5SQ;EACI,iBAAA;AC+SZ;;AD7SQ;EACI,gBAAA;ACgTZ;;AD9SQ;EACI,mBAAA;ACiTZ;;AD/SQ;EACI,mBAAA;ACkTZ;;ADhTQ;EACI,kBAAA;ACmTZ;;ADjTQ;EACG,iBAAA;ACoTX;;ADlTQ;EACI,oBAAA;ACqTZ;;ADlTQ;EACI,YAAA;ACqTZ;;ADnTQ;EACI,aAAA;ACsTZ;;ADnVQ;EACI,kBAAA;ACsVZ;;ADpVQ;EACI,iBAAA;ACuVZ;;ADrVQ;EACI,gBAAA;ACwVZ;;ADtVQ;EACI,mBAAA;ACyVZ;;ADvVQ;EACI,mBAAA;AC0VZ;;ADxVQ;EACI,kBAAA;AC2VZ;;ADzVQ;EACG,iBAAA;AC4VX;;AD1VQ;EACI,oBAAA;AC6VZ;;AD1VQ;EACI,YAAA;AC6VZ;;AD3VQ;EACI,aAAA;AC8VZ;;AD3XQ;EACI,kBAAA;AC8XZ;;AD5XQ;EACI,iBAAA;AC+XZ;;AD7XQ;EACI,gBAAA;ACgYZ;;AD9XQ;EACI,mBAAA;ACiYZ;;AD/XQ;EACI,mBAAA;ACkYZ;;ADhYQ;EACI,kBAAA;ACmYZ;;ADjYQ;EACG,iBAAA;ACoYX;;ADlYQ;EACI,oBAAA;ACqYZ;;ADlYQ;EACI,YAAA;ACqYZ;;ADnYQ;EACI,aAAA;ACsYZ;;ADnaQ;EACI,kBAAA;ACsaZ;;ADpaQ;EACI,iBAAA;ACuaZ;;ADraQ;EACI,gBAAA;ACwaZ;;ADtaQ;EACI,mBAAA;ACyaZ;;ADvaQ;EACI,mBAAA;AC0aZ;;ADxaQ;EACI,kBAAA;AC2aZ;;ADzaQ;EACG,iBAAA;AC4aX;;AD1aQ;EACI,oBAAA;AC6aZ;;AD1aQ;EACI,YAAA;AC6aZ;;AD3aQ;EACI,aAAA;AC8aZ;;AD3cQ;EACI,kBAAA;AC8cZ;;AD5cQ;EACI,iBAAA;AC+cZ;;AD7cQ;EACI,gBAAA;ACgdZ;;AD9cQ;EACI,mBAAA;ACidZ;;AD/cQ;EACI,mBAAA;ACkdZ;;ADhdQ;EACI,kBAAA;ACmdZ;;ADjdQ;EACG,iBAAA;ACodX;;ADldQ;EACI,oBAAA;ACqdZ;;ADldQ;EACI,YAAA;ACqdZ;;ADndQ;EACI,aAAA;ACsdZ;;ADnfQ;EACI,kBAAA;ACsfZ;;ADpfQ;EACI,iBAAA;ACufZ;;ADrfQ;EACI,gBAAA;ACwfZ;;ADtfQ;EACI,mBAAA;ACyfZ;;ADvfQ;EACI,mBAAA;AC0fZ;;ADxfQ;EACI,kBAAA;AC2fZ;;ADzfQ;EACG,iBAAA;AC4fX;;AD1fQ;EACI,oBAAA;AC6fZ;;AD1fQ;EACI,YAAA;AC6fZ;;AD3fQ;EACI,aAAA;AC8fZ;;AD3hBQ;EACI,kBAAA;AC8hBZ;;AD5hBQ;EACI,iBAAA;AC+hBZ;;AD7hBQ;EACI,gBAAA;ACgiBZ;;AD9hBQ;EACI,mBAAA;ACiiBZ;;AD/hBQ;EACI,mBAAA;ACkiBZ;;ADhiBQ;EACI,kBAAA;ACmiBZ;;ADjiBQ;EACG,iBAAA;ACoiBX;;ADliBQ;EACI,oBAAA;ACqiBZ;;ADliBQ;EACI,YAAA;ACqiBZ;;ADniBQ;EACI,aAAA;ACsiBZ;;ADnkBQ;EACI,kBAAA;ACskBZ;;ADpkBQ;EACI,iBAAA;ACukBZ;;ADrkBQ;EACI,gBAAA;ACwkBZ;;ADtkBQ;EACI,mBAAA;ACykBZ;;ADvkBQ;EACI,mBAAA;AC0kBZ;;ADxkBQ;EACI,kBAAA;AC2kBZ;;ADzkBQ;EACG,iBAAA;AC4kBX;;AD1kBQ;EACI,oBAAA;AC6kBZ;;AD1kBQ;EACI,YAAA;AC6kBZ;;AD3kBQ;EACI,aAAA;AC8kBZ;;AD3mBQ;EACI,kBAAA;AC8mBZ;;AD5mBQ;EACI,iBAAA;AC+mBZ;;AD7mBQ;EACI,gBAAA;ACgnBZ;;AD9mBQ;EACI,mBAAA;ACinBZ;;AD/mBQ;EACI,mBAAA;ACknBZ;;ADhnBQ;EACI,kBAAA;ACmnBZ;;ADjnBQ;EACG,iBAAA;AConBX;;ADlnBQ;EACI,oBAAA;ACqnBZ;;ADlnBQ;EACI,YAAA;ACqnBZ;;ADnnBQ;EACI,aAAA;ACsnBZ;;ADnpBQ;EACI,kBAAA;ACspBZ;;ADppBQ;EACI,iBAAA;ACupBZ;;ADrpBQ;EACI,gBAAA;ACwpBZ;;ADtpBQ;EACI,mBAAA;ACypBZ;;ADvpBQ;EACI,mBAAA;AC0pBZ;;ADxpBQ;EACI,kBAAA;AC2pBZ;;ADzpBQ;EACG,iBAAA;AC4pBX;;AD1pBQ;EACI,oBAAA;AC6pBZ;;AD1pBQ;EACI,YAAA;AC6pBZ;;AD3pBQ;EACI,aAAA;AC8pBZ;;AD3rBQ;EACI,kBAAA;AC8rBZ;;AD5rBQ;EACI,iBAAA;AC+rBZ;;AD7rBQ;EACI,gBAAA;ACgsBZ;;AD9rBQ;EACI,mBAAA;ACisBZ;;AD/rBQ;EACI,mBAAA;ACksBZ;;ADhsBQ;EACI,kBAAA;ACmsBZ;;ADjsBQ;EACG,iBAAA;ACosBX;;ADlsBQ;EACI,oBAAA;ACqsBZ;;ADlsBQ;EACI,YAAA;ACqsBZ;;ADnsBQ;EACI,aAAA;ACssBZ;;ADnuBQ;EACI,kBAAA;ACsuBZ;;ADpuBQ;EACI,iBAAA;ACuuBZ;;ADruBQ;EACI,gBAAA;ACwuBZ;;ADtuBQ;EACI,mBAAA;ACyuBZ;;ADvuBQ;EACI,mBAAA;AC0uBZ;;ADxuBQ;EACI,kBAAA;AC2uBZ;;ADzuBQ;EACG,iBAAA;AC4uBX;;AD1uBQ;EACI,oBAAA;AC6uBZ;;AD1uBQ;EACI,YAAA;AC6uBZ;;AD3uBQ;EACI,aAAA;AC8uBZ;;AD3wBQ;EACI,kBAAA;AC8wBZ;;AD5wBQ;EACI,iBAAA;AC+wBZ;;AD7wBQ;EACI,gBAAA;ACgxBZ;;AD9wBQ;EACI,mBAAA;ACixBZ;;AD/wBQ;EACI,mBAAA;ACkxBZ;;ADhxBQ;EACI,kBAAA;ACmxBZ;;ADjxBQ;EACG,iBAAA;ACoxBX;;ADlxBQ;EACI,oBAAA;ACqxBZ;;ADlxBQ;EACI,YAAA;ACqxBZ;;ADnxBQ;EACI,aAAA;ACsxBZ;;ADnzBQ;EACI,kBAAA;ACszBZ;;ADpzBQ;EACI,iBAAA;ACuzBZ;;ADrzBQ;EACI,gBAAA;ACwzBZ;;ADtzBQ;EACI,mBAAA;ACyzBZ;;ADvzBQ;EACI,mBAAA;AC0zBZ;;ADxzBQ;EACI,kBAAA;AC2zBZ;;ADzzBQ;EACG,iBAAA;AC4zBX;;AD1zBQ;EACI,oBAAA;AC6zBZ;;AD1zBQ;EACI,YAAA;AC6zBZ;;AD3zBQ;EACI,aAAA;AC8zBZ;;AD31BQ;EACI,kBAAA;AC81BZ;;AD51BQ;EACI,iBAAA;AC+1BZ;;AD71BQ;EACI,gBAAA;ACg2BZ;;AD91BQ;EACI,mBAAA;ACi2BZ;;AD/1BQ;EACI,mBAAA;ACk2BZ;;ADh2BQ;EACI,kBAAA;ACm2BZ;;ADj2BQ;EACG,iBAAA;ACo2BX;;ADl2BQ;EACI,oBAAA;ACq2BZ;;ADl2BQ;EACI,YAAA;ACq2BZ;;ADn2BQ;EACI,aAAA;ACs2BZ;;ADn4BQ;EACI,kBAAA;ACs4BZ;;ADp4BQ;EACI,iBAAA;ACu4BZ;;ADr4BQ;EACI,gBAAA;ACw4BZ;;ADt4BQ;EACI,mBAAA;ACy4BZ;;ADv4BQ;EACI,mBAAA;AC04BZ;;ADx4BQ;EACI,kBAAA;AC24BZ;;ADz4BQ;EACG,iBAAA;AC44BX;;AD14BQ;EACI,oBAAA;AC64BZ;;AD14BQ;EACI,YAAA;AC64BZ;;AD34BQ;EACI,aAAA;AC84BZ;;AD36BQ;EACI,mBAAA;AC86BZ;;AD56BQ;EACI,kBAAA;AC+6BZ;;AD76BQ;EACI,iBAAA;ACg7BZ;;AD96BQ;EACI,oBAAA;ACi7BZ;;AD/6BQ;EACI,oBAAA;ACk7BZ;;ADh7BQ;EACI,mBAAA;ACm7BZ;;ADj7BQ;EACG,kBAAA;ACo7BX;;ADl7BQ;EACI,qBAAA;ACq7BZ;;ADl7BQ;EACI,aAAA;ACq7BZ;;ADn7BQ;EACI,cAAA;ACs7BZ;;ADn9BQ;EACI,mBAAA;ACs9BZ;;ADp9BQ;EACI,kBAAA;ACu9BZ;;ADr9BQ;EACI,iBAAA;ACw9BZ;;ADt9BQ;EACI,oBAAA;ACy9BZ;;ADv9BQ;EACI,oBAAA;AC09BZ;;ADx9BQ;EACI,mBAAA;AC29BZ;;ADz9BQ;EACG,kBAAA;AC49BX;;AD19BQ;EACI,qBAAA;AC69BZ;;AD19BQ;EACI,aAAA;AC69BZ;;AD39BQ;EACI,cAAA;AC89BZ;;AD3/BQ;EACI,mBAAA;AC8/BZ;;AD5/BQ;EACI,kBAAA;AC+/BZ;;AD7/BQ;EACI,iBAAA;ACggCZ;;AD9/BQ;EACI,oBAAA;ACigCZ;;AD//BQ;EACI,oBAAA;ACkgCZ;;ADhgCQ;EACI,mBAAA;ACmgCZ;;ADjgCQ;EACG,kBAAA;ACogCX;;ADlgCQ;EACI,qBAAA;ACqgCZ;;ADlgCQ;EACI,aAAA;ACqgCZ;;ADngCQ;EACI,cAAA;ACsgCZ;;ADniCQ;EACI,mBAAA;ACsiCZ;;ADpiCQ;EACI,kBAAA;ACuiCZ;;ADriCQ;EACI,iBAAA;ACwiCZ;;ADtiCQ;EACI,oBAAA;ACyiCZ;;ADviCQ;EACI,oBAAA;AC0iCZ;;ADxiCQ;EACI,mBAAA;AC2iCZ;;ADziCQ;EACG,kBAAA;AC4iCX;;AD1iCQ;EACI,qBAAA;AC6iCZ;;AD1iCQ;EACI,aAAA;AC6iCZ;;AD3iCQ;EACI,cAAA;AC8iCZ;;AD3kCQ;EACI,mBAAA;AC8kCZ;;AD5kCQ;EACI,kBAAA;AC+kCZ;;AD7kCQ;EACI,iBAAA;ACglCZ;;AD9kCQ;EACI,oBAAA;ACilCZ;;AD/kCQ;EACI,oBAAA;ACklCZ;;ADhlCQ;EACI,mBAAA;ACmlCZ;;ADjlCQ;EACG,kBAAA;AColCX;;ADllCQ;EACI,qBAAA;ACqlCZ;;ADllCQ;EACI,aAAA;ACqlCZ;;ADnlCQ;EACI,cAAA;ACslCZ;;ADnnCQ;EACI,mBAAA;ACsnCZ;;ADpnCQ;EACI,kBAAA;ACunCZ;;ADrnCQ;EACI,iBAAA;ACwnCZ;;ADtnCQ;EACI,oBAAA;ACynCZ;;ADvnCQ;EACI,oBAAA;AC0nCZ;;ADxnCQ;EACI,mBAAA;AC2nCZ;;ADznCQ;EACG,kBAAA;AC4nCX;;AD1nCQ;EACI,qBAAA;AC6nCZ;;AD1nCQ;EACI,aAAA;AC6nCZ;;AD3nCQ;EACI,cAAA;AC8nCZ;;AD3pCQ;EACI,mBAAA;AC8pCZ;;AD5pCQ;EACI,kBAAA;AC+pCZ;;AD7pCQ;EACI,iBAAA;ACgqCZ;;AD9pCQ;EACI,oBAAA;ACiqCZ;;AD/pCQ;EACI,oBAAA;ACkqCZ;;ADhqCQ;EACI,mBAAA;ACmqCZ;;ADjqCQ;EACG,kBAAA;ACoqCX;;ADlqCQ;EACI,qBAAA;ACqqCZ;;ADlqCQ;EACI,aAAA;ACqqCZ;;ADnqCQ;EACI,cAAA;ACsqCZ;;ADnsCQ;EACI,mBAAA;ACssCZ;;ADpsCQ;EACI,kBAAA;ACusCZ;;ADrsCQ;EACI,iBAAA;ACwsCZ;;ADtsCQ;EACI,oBAAA;ACysCZ;;ADvsCQ;EACI,oBAAA;AC0sCZ;;ADxsCQ;EACI,mBAAA;AC2sCZ;;ADzsCQ;EACG,kBAAA;AC4sCX;;AD1sCQ;EACI,qBAAA;AC6sCZ;;AD1sCQ;EACI,aAAA;AC6sCZ;;AD3sCQ;EACI,cAAA;AC8sCZ;;AD3uCQ;EACI,mBAAA;AC8uCZ;;AD5uCQ;EACI,kBAAA;AC+uCZ;;AD7uCQ;EACI,iBAAA;ACgvCZ;;AD9uCQ;EACI,oBAAA;ACivCZ;;AD/uCQ;EACI,oBAAA;ACkvCZ;;ADhvCQ;EACI,mBAAA;ACmvCZ;;ADjvCQ;EACG,kBAAA;ACovCX;;ADlvCQ;EACI,qBAAA;ACqvCZ;;ADlvCQ;EACI,aAAA;ACqvCZ;;ADnvCQ;EACI,cAAA;ACsvCZ;;ADnxCQ;EACI,mBAAA;ACsxCZ;;ADpxCQ;EACI,kBAAA;ACuxCZ;;ADrxCQ;EACI,iBAAA;ACwxCZ;;ADtxCQ;EACI,oBAAA;ACyxCZ;;ADvxCQ;EACI,oBAAA;AC0xCZ;;ADxxCQ;EACI,mBAAA;AC2xCZ;;ADzxCQ;EACG,kBAAA;AC4xCX;;AD1xCQ;EACI,qBAAA;AC6xCZ;;AD1xCQ;EACI,aAAA;AC6xCZ;;AD3xCQ;EACI,cAAA;AC8xCZ;;AD3zCQ;EACI,mBAAA;AC8zCZ;;AD5zCQ;EACI,kBAAA;AC+zCZ;;AD7zCQ;EACI,iBAAA;ACg0CZ;;AD9zCQ;EACI,oBAAA;ACi0CZ;;AD/zCQ;EACI,oBAAA;ACk0CZ;;ADh0CQ;EACI,mBAAA;ACm0CZ;;ADj0CQ;EACG,kBAAA;ACo0CX;;ADl0CQ;EACI,qBAAA;ACq0CZ;;ADl0CQ;EACI,aAAA;ACq0CZ;;ADn0CQ;EACI,cAAA;ACs0CZ;;ADn2CQ;EACI,mBAAA;ACs2CZ;;ADp2CQ;EACI,kBAAA;ACu2CZ;;ADr2CQ;EACI,iBAAA;ACw2CZ;;ADt2CQ;EACI,oBAAA;ACy2CZ;;ADv2CQ;EACI,oBAAA;AC02CZ;;ADx2CQ;EACI,mBAAA;AC22CZ;;ADz2CQ;EACG,kBAAA;AC42CX;;AD12CQ;EACI,qBAAA;AC62CZ;;AD12CQ;EACI,aAAA;AC62CZ;;AD32CQ;EACI,cAAA;AC82CZ;;AD34CQ;EACI,mBAAA;AC84CZ;;AD54CQ;EACI,kBAAA;AC+4CZ;;AD74CQ;EACI,iBAAA;ACg5CZ;;AD94CQ;EACI,oBAAA;ACi5CZ;;AD/4CQ;EACI,oBAAA;ACk5CZ;;ADh5CQ;EACI,mBAAA;ACm5CZ;;ADj5CQ;EACG,kBAAA;ACo5CX;;ADl5CQ;EACI,qBAAA;ACq5CZ;;ADl5CQ;EACI,aAAA;ACq5CZ;;ADn5CQ;EACI,cAAA;ACs5CZ;;ADn7CQ;EACI,mBAAA;ACs7CZ;;ADp7CQ;EACI,kBAAA;ACu7CZ;;ADr7CQ;EACI,iBAAA;ACw7CZ;;ADt7CQ;EACI,oBAAA;ACy7CZ;;ADv7CQ;EACI,oBAAA;AC07CZ;;ADx7CQ;EACI,mBAAA;AC27CZ;;ADz7CQ;EACG,kBAAA;AC47CX;;AD17CQ;EACI,qBAAA;AC67CZ;;AD17CQ;EACI,aAAA;AC67CZ;;AD37CQ;EACI,cAAA;AC87CZ;;AD39CQ;EACI,mBAAA;AC89CZ;;AD59CQ;EACI,kBAAA;AC+9CZ;;AD79CQ;EACI,iBAAA;ACg+CZ;;AD99CQ;EACI,oBAAA;ACi+CZ;;AD/9CQ;EACI,oBAAA;ACk+CZ;;ADh+CQ;EACI,mBAAA;ACm+CZ;;ADj+CQ;EACG,kBAAA;ACo+CX;;ADl+CQ;EACI,qBAAA;ACq+CZ;;ADl+CQ;EACI,aAAA;ACq+CZ;;ADn+CQ;EACI,cAAA;ACs+CZ;;ADngDQ;EACI,mBAAA;ACsgDZ;;ADpgDQ;EACI,kBAAA;ACugDZ;;ADrgDQ;EACI,iBAAA;ACwgDZ;;ADtgDQ;EACI,oBAAA;ACygDZ;;ADvgDQ;EACI,oBAAA;AC0gDZ;;ADxgDQ;EACI,mBAAA;AC2gDZ;;ADzgDQ;EACG,kBAAA;AC4gDX;;AD1gDQ;EACI,qBAAA;AC6gDZ;;AD1gDQ;EACI,aAAA;AC6gDZ;;AD3gDQ;EACI,cAAA;AC8gDZ;;AD3iDQ;EACI,mBAAA;AC8iDZ;;AD5iDQ;EACI,kBAAA;AC+iDZ;;AD7iDQ;EACI,iBAAA;ACgjDZ;;AD9iDQ;EACI,oBAAA;ACijDZ;;AD/iDQ;EACI,oBAAA;ACkjDZ;;ADhjDQ;EACI,mBAAA;ACmjDZ;;ADjjDQ;EACG,kBAAA;ACojDX;;ADljDQ;EACI,qBAAA;ACqjDZ;;ADljDQ;EACI,aAAA;ACqjDZ;;ADnjDQ;EACI,cAAA;ACsjDZ;;ADnlDQ;EACI,mBAAA;ACslDZ;;ADplDQ;EACI,kBAAA;ACulDZ;;ADrlDQ;EACI,iBAAA;ACwlDZ;;ADtlDQ;EACI,oBAAA;ACylDZ;;ADvlDQ;EACI,oBAAA;AC0lDZ;;ADxlDQ;EACI,mBAAA;AC2lDZ;;ADzlDQ;EACG,kBAAA;AC4lDX;;AD1lDQ;EACI,qBAAA;AC6lDZ;;AD1lDQ;EACI,aAAA;AC6lDZ;;AD3lDQ;EACI,cAAA;AC8lDZ;;AD3nDQ;EACI,mBAAA;AC8nDZ;;AD5nDQ;EACI,kBAAA;AC+nDZ;;AD7nDQ;EACI,iBAAA;ACgoDZ;;AD9nDQ;EACI,oBAAA;ACioDZ;;AD/nDQ;EACI,oBAAA;ACkoDZ;;ADhoDQ;EACI,mBAAA;ACmoDZ;;ADjoDQ;EACG,kBAAA;ACooDX;;ADloDQ;EACI,qBAAA;ACqoDZ;;ADloDQ;EACI,aAAA;ACqoDZ;;ADnoDQ;EACI,cAAA;ACsoDZ;;ADnqDQ;EACI,mBAAA;ACsqDZ;;ADpqDQ;EACI,kBAAA;ACuqDZ;;ADrqDQ;EACI,iBAAA;ACwqDZ;;ADtqDQ;EACI,oBAAA;ACyqDZ;;ADvqDQ;EACI,oBAAA;AC0qDZ;;ADxqDQ;EACI,mBAAA;AC2qDZ;;ADzqDQ;EACG,kBAAA;AC4qDX;;AD1qDQ;EACI,qBAAA;AC6qDZ;;AD1qDQ;EACI,aAAA;AC6qDZ;;AD3qDQ;EACI,cAAA;AC8qDZ;;AD3sDQ;EACI,mBAAA;AC8sDZ;;AD5sDQ;EACI,kBAAA;AC+sDZ;;AD7sDQ;EACI,iBAAA;ACgtDZ;;AD9sDQ;EACI,oBAAA;ACitDZ;;AD/sDQ;EACI,oBAAA;ACktDZ;;ADhtDQ;EACI,mBAAA;ACmtDZ;;ADjtDQ;EACG,kBAAA;ACotDX;;ADltDQ;EACI,qBAAA;ACqtDZ;;ADltDQ;EACI,aAAA;ACqtDZ;;ADntDQ;EACI,cAAA;ACstDZ;;ADnvDQ;EACI,mBAAA;ACsvDZ;;ADpvDQ;EACI,kBAAA;ACuvDZ;;ADrvDQ;EACI,iBAAA;ACwvDZ;;ADtvDQ;EACI,oBAAA;ACyvDZ;;ADvvDQ;EACI,oBAAA;AC0vDZ;;ADxvDQ;EACI,mBAAA;AC2vDZ;;ADzvDQ;EACG,kBAAA;AC4vDX;;AD1vDQ;EACI,qBAAA;AC6vDZ;;AD1vDQ;EACI,aAAA;AC6vDZ;;AD3vDQ;EACI,cAAA;AC8vDZ;;AD3xDQ;EACI,mBAAA;AC8xDZ;;AD5xDQ;EACI,kBAAA;AC+xDZ;;AD7xDQ;EACI,iBAAA;ACgyDZ;;AD9xDQ;EACI,oBAAA;ACiyDZ;;AD/xDQ;EACI,oBAAA;ACkyDZ;;ADhyDQ;EACI,mBAAA;ACmyDZ;;ADjyDQ;EACG,kBAAA;ACoyDX;;ADlyDQ;EACI,qBAAA;ACqyDZ;;ADlyDQ;EACI,aAAA;ACqyDZ;;ADnyDQ;EACI,cAAA;ACsyDZ;;ADn0DQ;EACI,mBAAA;ACs0DZ;;ADp0DQ;EACI,kBAAA;ACu0DZ;;ADr0DQ;EACI,iBAAA;ACw0DZ;;ADt0DQ;EACI,oBAAA;ACy0DZ;;ADv0DQ;EACI,oBAAA;AC00DZ;;ADx0DQ;EACI,mBAAA;AC20DZ;;ADz0DQ;EACG,kBAAA;AC40DX;;AD10DQ;EACI,qBAAA;AC60DZ;;AD10DQ;EACI,aAAA;AC60DZ;;AD30DQ;EACI,cAAA;AC80DZ;;AD32DQ;EACI,mBAAA;AC82DZ;;AD52DQ;EACI,kBAAA;AC+2DZ;;AD72DQ;EACI,iBAAA;ACg3DZ;;AD92DQ;EACI,oBAAA;ACi3DZ;;AD/2DQ;EACI,oBAAA;ACk3DZ;;ADh3DQ;EACI,mBAAA;ACm3DZ;;ADj3DQ;EACG,kBAAA;ACo3DX;;ADl3DQ;EACI,qBAAA;ACq3DZ;;ADl3DQ;EACI,aAAA;ACq3DZ;;ADn3DQ;EACI,cAAA;ACs3DZ;;ADn5DQ;EACI,mBAAA;ACs5DZ;;ADp5DQ;EACI,kBAAA;ACu5DZ;;ADr5DQ;EACI,iBAAA;ACw5DZ;;ADt5DQ;EACI,oBAAA;ACy5DZ;;ADv5DQ;EACI,oBAAA;AC05DZ;;ADx5DQ;EACI,mBAAA;AC25DZ;;ADz5DQ;EACG,kBAAA;AC45DX;;AD15DQ;EACI,qBAAA;AC65DZ;;AD15DQ;EACI,aAAA;AC65DZ;;AD35DQ;EACI,cAAA;AC85DZ;;AC/8DA;EACI,eAAA;EACA,YAAA;ADk9DJ;;AC/8DA;EACI,WAAA;EACA,WAAA;EACA,cAAA;ADk9DJ;;AC78DA;EAAU,kBAAA;ADi9DV;;ACh9DA;EAAU,iBAAA;ADo9DV;;ACn9DA;EAAS,iBAAA;EAAmB,kBAAA;ADw9D5B;;ACr9DA;EAAM,gBAAA;ADy9DN;;ACx9DA;EAAM,kBAAA;AD49DN;;AC39DA;EAAM,iBAAA;AD+9DN;;AC59DA;EAAQ,mBAAA;ADg+DR;;AC/9DA;EAAW,sBAAA;ADm+DX;;ACj+DA;EAAU,YAAA;ADq+DV;;ACn+DA;EAAO,kBAAA;ADu+DP;;ACn+DA;EAAc,yBAAA;ADu+Dd;;ACp+DA;EAAM,cAAA;ADw+DN;;ACp+DA;EAAM,kBAAA;ADw+DN;;ACv+DA;EAAM,kBAAA;AD2+DN;;ACv+DA;EAAS,cAAA;AD2+DT;;AC1+DA;EAAU,qBAAA;AD8+DV;;AC5+DA;EAAQ,aAAA;ADg/DR;;AC/+DA;EAAW,eAAA;ADm/DX;;ACj/DA;EAAoB,sBAAA;ADq/DpB;;ACp/DA;EAAW,uBAAA;ADw/DX;;ACv/DA;EAAkB,8BAAA;AD2/DlB;;ACz/DA;EAAU,uBAAA;AD6/DV;;AC5/DA;EAAW,mBAAA;ADggEX;;AC3/DA;EACI,cC1DO;AFwjEX;;AC3/DA;EACI,cC3DQ;AFyjEZ;;AC5/DA;EACI,aC9DQ;AF6jEZ;;AGnkEA,qBAAA;AACA;;;EAGI,sBAAA;EACA,UAAA;EACA,SAAA;AHskEJ;;AGnkEA;EACI,gBAAA;AHskEJ;;AGnkEA,0DAAA;AACA;EACI,8BAAA;AHskEJ;;AGnkEA,oCAAA;AACA;;EAEI,eAAA;AHskEJ;;AGnkEA,yCAAA;AACA;;;;EAII,aAAA;AHskEJ;;AInmEA;EACI,gCFyBE;EExBF,eAAA;AJsmEJ;;AInmEA;EACI,gBAAA;AJsmEJ;;AInmEA;EACI,qBAAA;AJsmEJ;;ADpmEI;EACI,eKEwB;ELDxB,mBKC6B;AJsmErC;;ADzmEI;EACI,eKGwB;ELFxB,mBKE6B;AJ0mErC;;AD9mEI;EACI,eKIwB;ELHxB,mBKG6B;AJ8mErC;;ADnnEI;EACI,eKOmB;ELNnB,mBKMwB;AJgnEhC;;ADxnEI;EACI,eKQmB;ELPnB,mBKOwB;AJonEhC;;AD7nEI;EACI,eKSmB;ELRnB,mBKQwB;AJwnEhC;;ADxoEI;EACI,cGLA;AFgpER;;AIvnEA;EAAS,gBAAA;AJ2nET;;AI1nEA;EAAS,gBAAA;AJ8nET;;AK1pEA;EACI,uBAAA;AL6pEJ;;AK1pEA,2BAAA;AACA;EACI,iBAAA;EACA,6BAAA;EACA,gBAAA;AL6pEJ;;AKzpEA;EACI,aAAA;EACA,yBAAA;AL4pEJ;;AM1qEA;EACI,qBAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;EACA,iCAAA;AN6qEJ;AM1qEI;EACI,yBJRF;EISE,cJIA;EIHA,kBAAA;EACA,kBAAA;EACA,gBAAA;AN4qER;AMzqEQ;EACI,yBAAA;AN2qEZ;AMvqEI;EACI,yBJRA;EISA,cJHA;EIIA,kBAAA;EACA,kBAAA;EACA,gBAAA;ANyqER;AMtqEQ;EACI,yBAAA;ANwqEZ;AMpqEI;EACI,YAAA;EACA,WAAA;ANsqER;;AMlqEA;EAII,oBAAA;EACA,yBAAA;EAGA,mBAAA;EACA,YAAA;ANgqEJ;AM9pEI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,yBAAA;EACA,YAAA;ANgqER;AM9pEQ;EACI,yBAAA;EACA,yBJ5DN;EI6DM,yBAAA;ANgqEZ;AM/pEY;EACI,WAAA;ANiqEhB;AM7pEQ;EACI,aJnEJ;AFkuER;AM3pEI;EACI,4BAAA;EACA,+BAAA;EACA,iBAAA;AN6pER;AM3pEI;EACI,6BAAA;EACA,gCAAA;EACA,kBAAA;AN6pER;;AMzpEA;EACI,oBAAA;EACA,yBAAA;AN4pEJ;AM1pEI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AN4pER;AM1pEQ;EACI,+BAAA;AN4pEZ;AMzpEQ;EACI,yBAAA;AN2pEZ;;AOjwEA;EACI,yBLiBQ;EKhBR,kBAAA;APowEJ;AOlwEI;EACI,cAAA;EACA,WAAA;EACA,eAAA;EACA,cLYA;EKXA,yBLSI;EKRJ,YAAA;EACA,aAAA;APowER;AOjwEI;EACI,cAAA;EACA,eAAA;EACA,cLEI;AFiwEZ;;AQpxEA;EACI,kBAAA;ARuxEJ;AQrxEI;EACI,mBAAA;EACA,aAAA;EACA,YAAA;EAEA,yBAAA;EACA,yBNKA;EMJA,gBAAA;EACA,YAAA;EACA,kBAAA;ARsxER;AQlxEI;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,6BAAA;ARoxER;AQjxEQ;EACI,UAAA;EACA,UAAA;EACA,WAAA;ARmxEZ;;AShzEA;EACI,qBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EAIA,sBAAA;ATgzEJ;;AS5yEA;EAEI,gBAAA;EACA,qBPPW;AFqzEf;;AS3yEA;EAEI,gBAAA;EACA,qBPXa;AFwzEjB;;AS1yEA;EAEI,gBAAA;EACA,qBPhBU;AF4zEd;;ASzyEA;EAEI,gBAAA;EACA,qBPxBQ;AFm0EZ;;ASxyEA;EAEI,gBAAA;EACA,qBP3BY;AFq0EhB;;ASvyEA;EACI,UAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AT0yEJ;;AUz1EA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBRSI;EQRJ,gBAAA;AV41EJ;AU11EI;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;AV41ER;AU31EQ;EACI,qBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,8BAAA;EACA,+BAAA;EACA,iBAAA;AV61EZ;;AWj3EA;EACI,yBTaI;ESZJ,cAAA;EACA,0BAAA;EACA,YAAA;EACA,gBAAA;EAEA,aAAA;EACA,sBAAA;EACA,8BAAA;AXm3EJ;AW52EI;EACI,cAAA;EACA,6BAAA;EACA,cTjBA;ESkBA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AX82ER;AW32EQ;EACI,2CAAA;AX62EZ;AWz2EI;EACI,aT/BA;AF04ER;AWx2EI;EAEI,2CAAA;EACA,cTtCF;AF+4EN;AWv2EQ;EACI,aTzCN;AFk5EN;;AYn5EA;EAEI,UAAA;EACA,yBAAA;AZq5EJ;AYn5EI;EACI,0BAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBVIA;EUHA,gBAAA;AZq5ER;AYl5EI;EACI,aAAA;EACA,sBAAA;EACA,yBVHA;EUIA,aAAA;EACA,gCAAA;EACA,kCAAA;EACA,eAAA;AZo5ER;AYl5EQ;EACI,2CAAA;AZo5EZ;AYh5EI;EACI,8BAAA;EACA,0CAAA;EACA,2CAAA;AZk5ER;AY94EI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AZg5ER;AY74EI;EACI,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AZ+4ER;AY54EI;EACI,0BAAA;EAEA,YAAA;EAGA,aAAA;EACA,sBAAA;EACA,cAAA;AZ24ER;AYx4EI;EACI,yBV9CA;EU+CA,iBAAA;EAEA,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AZy4ER;AYx4EQ;EACI,WAAA;EACA,cAAA;EACA,cAAA;EACA,UAAA;EACA,gCAAA;EACA,kBAAA;EACA,SAAA;AZ04EZ;AYt4EI;EACI,yBVnEA;EUoEA,cAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;AZw4ER;AYr4EI;EACI,aAAA;EACA,eAAA;EACA,SAAA;AZu4ER;AYp4EI;EACI,qBAAA;EACA,yBAAA;EACA,yBAAA;EACA,aAAA;AZs4ER","sourcesContent":["@mixin dimension($height,$width){\n    height: #{$height};\n    width: #{$width};\n}\n\n@mixin font-color($name, $color){\n    .clr-#{$name}{\n        color: $color;\n    }\n}\n\n@mixin font-size($name, $font-size, $line-height){\n    .#{$name}{\n        font-size: $font-size;\n        line-height: $line-height;\n    }\n}\n\n@mixin spacing($number) {\n    @for $i from 1 through 50{\n        .mr-#{$i} {\n            margin-right: #{$i * $number}px;\n        }\n        .ml-#{$i} {\n            margin-left: #{$i * $number}px;\n        }\n        .mt-#{$i} {\n            margin-top: #{$i * $number}px;\n        }\n        .mb-#{$i} {\n            margin-bottom: #{$i * $number}px;\n        }\n        .pr-#{$i} {\n            padding-right: #{$i * $number}px;\n        }\n        .pl-#{$i} {\n            padding-left: #{$i * $number}px;\n        }\n        .pt-#{$i} {\n           padding-top: #{$i * $number}px;\n        }\n        .pb-#{$i} {\n            padding-bottom: #{$i * $number}px;\n        }\n\n        .m-#{$i}{\n            margin: #{$i * $number}px;\n        }\n        .p-#{$i}{\n            padding: #{$i * $number}px;\n        }\n    }\n}\n\n@include spacing(4);\n\n\n// @each $name, $value in $color-list{\n//     .bg-#{$name}{\n//         background-color: $value;\n//     }\n//     .clr-#{$name}{\n//         color: $value;\n//     }\n//     .fill-#{$name}{\n//         fill: $value;\n//     }\n// }\n\n// @each $name, $size in $font-list{\n//     .fs-#{$name}{\n//         font-size: $size;\n//     }\n// }","@charset 'utf-8';\n\n// font\n@import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap';\n\n// utilities\n@import 'utilities/variables';\n@import 'utilities/mixins';\n@import 'utilities/helpers';\n\n// base\n@import 'base/reset';\n@import 'base/typography';\n@import 'base/base';\n\n// components\n@import 'components/buttons';\n@import 'components/select';\n@import 'components/textfelid';\n@import 'components/tags';\n\n// layout\n@import 'layout/header';\n@import 'layout/sidebar';\n@import 'layout/other';",".img-fluid{\n    max-width: 100%;\n    height: auto;\n}\n\n.clear-fix::after{\n    content: '';\n    clear: both;\n    display: table;\n}\n\n\n// margin auto\n.mr-auto{ margin-right: auto;}\n.ml-auto{ margin-left: auto;}\n.m-auto{ margin-left: auto; margin-right: auto;}\n\n// text-align \n.ta-l{text-align: left;}\n.ta-c{text-align: center;}\n.ta-r{text-align: right;}\n\n// vertical align\n.va-top{vertical-align: top;}\n.va-middle{vertical-align: middle;}\n\n.fs-reset{font-size: 0;}\n\n.wd-fc{width: fit-content;}\n\n// Uppercase letters\n\n.tt-uppercase{text-transform: uppercase;}\n\n// line heigh\n.lh-1{line-height: 1;}\n\n\n// border-radius\n.br-4{border-radius: 4px;}\n.br-6{border-radius: 6px;}\n\n// display\n\n.d-block{display: block;}\n.d-iblock{display: inline-block;}\n\n.d-flex{display: flex;}\n.flex-wrap{flex-wrap: wrap;}\n\n.flex-direction-col{flex-direction: column;}\n.jc-center{justify-content: center;}\n.jc-space-between{justify-content: space-between;}\n\n.ai-start{align-items: flex-start;}\n.ai-center{align-items: center;}\n\n\n// colors\n\n.clr-gunmetal{\n    color: $gunmetal;\n}\n\n.clr-cool-gray{\n    color: $cool-gray;\n}\n.fill-cool-gray{\n    fill: $cool-gray;\n}","// colors\n$blue:#007aff;\n$steel: #8e8e93;\n$gunmetal: #4c4f59;\n$steel-two:#81869f;\n$battleship-grey: #70727a;\n$cool-gray: #a3a3a8;\n\n$vivid-purple: #9200ff;\n$neon-blue: #00dcff;\n$pumpkin-orange: #ff7100;\n$ugly-yellow: #d0dc00;\n$purplish-grey: #6f6e74;\n\n$white: #ffffff;\n$gray-one: #ececec;\n$gray-two: #fafafa;\n$gray-three: #f3f3f3;\n$gray-four: #ececec;\n$gray-deep: #999999;\n$black: #000000;\n$black-one: #292929;\n$black-two: #151515;\n$yellow: #ffc107;\n$light-purple: #eaedfd;\n// fonts\n$font:'Rubik', sans-serif;","/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nul,ol{\n    list-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}","body {\n    font-family: $font;\n    font-size: 100%;\n}\n\nh1, h2, h3, .heading {\n    font-weight: 700;\n}\n\na, a:visited, a:active{\n    text-decoration: none;\n}\n\n\n//heading\n@include font-size('heading-lg',18px,normal);\n@include font-size('heading-md',16px,normal);\n@include font-size('heading-sm',15px,normal);\n\n//body\n@include font-size('fs-lg',14px,normal);\n@include font-size('fs-md',13px,normal);\n@include font-size('fs-sm',12px,normal);\n\n// font colors\n@include font-color('steel',$steel);\n\n.fw-300{ font-weight: 300;}\n.fw-500{ font-weight: 500; }","html:focus-within {\n    scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n    // overflow: hidden;\n}\n\n.wrapper{\n    display: flex;\n    background-color: $white;\n}",".btn{\n    display: inline-block;\n    text-decoration: none;\n    border: none;\n    cursor: pointer;\n    transition: all 150ms ease-in-out;\n\n\n    &-blue{\n        background-color: $blue;\n        color: $white;\n        padding:10px 40px;\n        border-radius: 2px;\n        font-weight: 300;\n        // text-transform: uppercase;\n\n        &:hover{\n            background-color: #0c29e6;\n        }\n    }\n\n    &-white{\n        background-color: $white;\n        color: $black;\n        padding:10px 10px;\n        border-radius: 2px;\n        font-weight: 300;\n        // text-transform: uppercase;\n\n        &:hover{\n            background-color: #0c29e6;\n        }\n    }\n\n    &__icon{\n        height: 20px;\n        width: 20px;\n    }\n}\n\n.btn-group--round{\n    // display: inline-block;\n    // font-size: 0;\n\n    display: inline-flex;\n    border: 1px solid $steel;\n    // border-top-left-radius: 10px;\n    // border-bottom-left-radius: 10px;\n    border-radius: 17px;\n    height: 34px;\n\n    .btn{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: white;\n        border: 1px solid #ededed;\n        padding: 5px;\n\n        &:hover{\n            background-color: #ededed;\n            background-color: $blue;\n            border: 1px solid $blue;\n            .btn__icon{\n                fill: white;\n            }\n        }\n\n        &__icon{\n            fill: $steel;\n        }\n    }\n\n    .btn:first-child{\n        border-top-left-radius: 17px;\n        border-bottom-left-radius: 17px;\n        padding-left: 8px;\n    }\n    .btn:last-child{\n        border-top-right-radius: 17px;\n        border-bottom-right-radius: 17px;\n        padding-right: 8px;\n    }\n}\n\n.btn-group--sqr{\n    display: inline-flex;\n    background-color: #f9f9f9;\n\n    .btn{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 110px;\n        width: 100%;\n        height: 60px;\n\n        &:not(:last-child){\n            border-right: 1px solid #e6e4e4;\n        }\n\n        &:hover{\n            background-color: #d4cfcf;\n        }\n    }\n}",".select{\n    background-color: $gray-four;\n    border-radius: 5px;\n\n    &__dropdown{\n        display: block;\n        width: 100%;\n        font-size: 16px;\n        color: $black;\n        background-color: $gray-four;\n        border: none;\n        outline: none;\n    }\n\n    &__label{\n        display: block;\n        font-size: 14px;\n        color: $gray-deep;\n    }\n}",".input{\n    position: relative;\n\n    &__felid{\n        border-radius: 15px;\n        outline: none;\n        border: none;\n        // box-shadow: 0 0 0 1px rgba($color: #000000, $alpha: 0.7);\n        border: 1px solid $steel;\n        background-color: $white;\n        min-width: 294px;\n        height: 30px;\n        padding-left: 35px;\n\n    }\n\n    &__icon{\n        fill: #000000;\n        width: 14px;\n        height: 14px;\n        position: absolute;\n        left: 10px;\n        top:50%;\n        transform: translate(0,-50%);\n\n    }\n        .input__icon  +  .input__icon {\n            left: 25px;\n            width: 8px;\n            height: 8px;\n        }\n}","%tag{\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    border: 3px solid;\n    // border-style: solid;\n    // border-width: 5px;\n    // border-radius: 1px;\n    vertical-align: middle;\n}\n\n\n.tag--personal{\n    @extend %tag;\n    margin-left: 4px;\n    border-color: $vivid-purple;\n}\n\n.tag--clients{\n    @extend %tag;\n    margin-left: 4px;\n    border-color: $pumpkin-orange;\n}\n\n.tag--family{\n    @extend %tag;\n    margin-left: 4px;\n    border-color: $ugly-yellow;\n}\n\n.tag--friends{\n    @extend %tag;\n    margin-left: 4px;\n    border-color: $neon-blue;\n}\n\n.tag--archives{\n    @extend %tag;\n    margin-left: 4px;\n    border-color: $purplish-grey;\n}\n\n.circle{\n    width: 9px;\n    height: 9px;\n    border-width: 5px;\n    border-radius: 50%;\n    margin-left: 0;\n}",".header{ \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px 30px;\n    background-color: $white;\n    min-height: 60px;\n\n    &__logo{\n        display: flex;\n        align-items: center;\n        font-size:20px;\n        letter-spacing: 2px;\n        .logo-U{\n            display: inline-block;\n            background-color: black;\n            height:20px;\n            width: 15px;\n            border-bottom-left-radius: 50%;\n            border-bottom-right-radius: 50%;\n            margin-right: 2px;\n        }\n    }\n}",".sidebar{\n    background-color: $white;\n    color: $steel;\n    height: calc(100vh - 60px);\n    width: 220px;\n    overflow-y: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    // &__items:hover:not(:first-child){\n    //     background-color: rgba(142, 142, 147, 0.19);\n    //     cursor: pointer;\n    // }\n\n    &__btn{\n        display: block;\n        background-color: transparent;\n        color: $steel;\n        font-size: 14px;\n        width: 100%;\n        text-align: left;\n        padding-left: 16px;\n        padding-bottom: 4px;\n        // cursor: pointer;\n\n        &:hover{\n            background-color: rgba(142, 142, 147, 0.19);\n        }\n    }\n\n    .btn__icon{\n        fill: $steel;\n    }\n\n    .active{\n        // color: $gunmetal;\n        background-color:rgba(142, 142, 147, 0.19) ;\n        color: $blue;\n\n        .btn__icon{\n            fill: $blue;\n        }\n    }\n}",".email{\n\n    width: 90%;\n    width: calc(100% - 220px);\n\n    &__list{\n        height: calc(100vh - 60px);\n        width: 40%;\n        max-width: 334px;\n        min-width: 334px;\n        background-color: $white;\n        overflow-y: auto;\n    }\n\n    &__item{\n        display: flex;\n        flex-direction: column;\n        background-color: $white;\n        padding: 20px;\n        border-bottom: 1px solid #ededed;\n        border-left: 3px solid transparent;\n        cursor: pointer;\n\n        &:hover{\n            background-color: rgba(142, 142, 147, 0.05);\n        }\n    }\n\n    .active--email{\n        border-left: 3px solid $blue;\n        background-color: rgba($color: $steel, $alpha: 0.5);\n        background-color: rgba(142, 142, 147, 0.05);\n    }\n\n   \n    &__details{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    &__subject{\n        max-width: 200px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n    }\n\n    &__reader{\n        height: calc(100vh - 60px);\n        // width: 60%;\n        flex-grow: 1;\n        // background-color: #72BDA3;\n\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    &__header{\n        background-color: $white;\n        flex-basis: 130px;\n        // border: 1px solid;\n        display: flex;\n        justify-content: space-between;\n        /* width: 100%; */\n        align-items: center;\n        padding: 40px 30px;\n        position: relative;\n        &::after{\n            content: '';\n            display: block;\n            margin: 0 auto;\n            width: 90%;\n            border-bottom: 1px solid #eceff3;\n            position: absolute;\n            bottom: 0;\n        }\n    }\n\n    &__body{\n        background-color: $white;\n        color: #65676e;\n        flex-grow: 1;\n        padding: 30px;\n        white-space: pre-line;\n    }\n    \n    &__attachments{\n        display: flex;\n        flex-wrap: wrap;\n        gap: 10px;\n    }\n\n    .attachment{\n        display: inline-block;\n        background-color: #f5f5f5;\n        border: 1px solid #e5e5e5;\n        padding: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/getData */ "./src/js/getData.js");
/* harmony import */ var _js_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/globals */ "./src/js/globals.js");
/* harmony import */ var _js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/popluateEmailList */ "./src/js/popluateEmailList.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




var url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
url = 'http://127.0.0.1:5500/emails.json';
var sideBar = document.getElementById('sidebar');
var emailList = document.getElementById('email-list');
var emailReader = document.getElementById('email-reader');
var inboxBtn = document.getElementById('inboxBtn');
(0,_js_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function () {
  (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(inboxBtn, 'sidebarMenu');
  (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(_js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData, 'inbox');
  // const firstEmail = document.getElementById('1');
  // highlightElement(firstEmail,'emailList')
  // popEmailReader(globals.emailData,firstEmail);
});

var data = _js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData;
sideBar.addEventListener('click', function (e) {
  var eventTarget = e.target.closest('button');
  if (eventTarget == null) return;
  // console.log('sidebar',e.target.closest('button').id)

  switch (eventTarget.id) {
    case 'inboxBtn':
      // eventTarget.classList.add('active');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, 'inbox');
      break;
    case 'sentBtn':
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, 'sent');
      break;
    case 'starredBtn':
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, 'starred');
      break;
    case 'draftsBtn':
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, 'drafts');
      break;
    case 'trashBtn':
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
      (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, 'trash');
      break;
  }
});
emailList.addEventListener('click', function (e) {
  var eventTarget = e.target.closest('li');
  if (eventTarget == null) return;
  (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'emailList');
  (0,_js_popluateEmailList__WEBPACK_IMPORTED_MODULE_2__.popEmailReader)(_js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData, eventTarget);
});

// async () => {emailData =  await getData(url);}
// let emailData = async () => {return await getData(url)};

// import laughing from './assets/laughing.svg'

// const laughImg = document.getElementById('laughImg')
// laughImg.src = laughing
})();

/******/ })()
;
//# sourceMappingURL=bundled3daf0b14b94e1334991.js.map