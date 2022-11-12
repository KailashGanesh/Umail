/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/domFunctions.js":
/*!********************************!*\
  !*** ./src/js/domFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeComposeBox": () => (/* binding */ closeComposeBox),
/* harmony export */   "defaultScreen": () => (/* binding */ defaultScreen),
/* harmony export */   "deleteEmail": () => (/* binding */ deleteEmail),
/* harmony export */   "filterObject": () => (/* binding */ filterObject),
/* harmony export */   "highlightElement": () => (/* binding */ highlightElement),
/* harmony export */   "openComposeBox": () => (/* binding */ openComposeBox),
/* harmony export */   "popEmailList": () => (/* binding */ popEmailList),
/* harmony export */   "popEmailReader": () => (/* binding */ popEmailReader),
/* harmony export */   "updateNumber": () => (/* binding */ updateNumber)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


/**
 * loops through the emailData[folderName eg. 'inbox'] and populates email list element
 * @param  {object} data emailData object
 * @param  {string} folderName the folder the email belongs to eg. inbox, sent etc
 */
var popEmailList = function popEmailList(data, folderName) {
  var emailList = document.getElementById('email-list');
  var list = data[folderName];
  emailList.innerHTML = ''; // clear email list
  emailList.classList.remove('d-flex', 'ai-center', 'jc-center'); // remove classes that might be added in default screen

  if (list.length == 0) {
    // if no emails are available in the current folder show the default screen
    defaultScreen(true, false);
  }

  // loop thought the array
  for (var i = 0; i < list.length; i++) {
    // if attachment is available/true, add attachment icon
    var attachment = list[i]['attachment'] ? "<svg class=\"va-middle fill-cool-gray\" height=\"15\" width=\"15\"> <use xlink:href=\"dist/sprite.svg#icon-paperclip-solid\"></use> </svg>" : '';

    // if reply is true, add reply icon
    var reply = list[i]['reply'] ? "<svg class=\"va-middle fill-cool-gray\" height=\"20\" width=\"20\"> <use xlink:href=\"dist/sprite.svg#icon-arrow-back-outline\"></use> </svg>" : '';
    var tag = ''; // default no tags

    if (list[i]['tag'].length > 1) {
      // if tag is available add the tag class
      tag = "<span class=\"tag--".concat(list[i]['tag'], " circle va-middle ml-1\"></span>");
    }
    emailList.innerHTML += "\n    <li class=\"email__item ".concat(list[i]['unread'] ? 'unread' : '', "\" id=\"").concat(_globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folderName].indexOf(list[i]), "\" data-folder=\"").concat(folderName, "\">\n        <div class=\"email__details\">\n            <p class=\"heading-sm email__subject clr-gunmetal va-middle\">").concat(list[i]['subject'], "</p>\n            <span class=\"fs-sm clr-gunmetal\">").concat(list[i]['time'], "</span>\n        </div>\n        <div class=\"email__details\">\n            <p class=\"fs-sm clr-cool-gray\">").concat(list[i]['name'], "</p>\n            <div>\n                ").concat(attachment, "\n                ").concat(reply, "\n                ").concat(tag, "\n            </div>\n        </div> \n    </li>\n    ");
  }
};

/**
 * clears child elements and shows a default or placeholder screen in emailList and emailReader
 * @param  {Boolean} clarEmailList if true it will change email list to default view
 * @param  {Boolean} clearEmailReader if true it will change email reader to default view
 */
var defaultScreen = function defaultScreen() {
  var clearEmailList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var clearEmailReader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (clearEmailList) {
    var emailList = document.getElementById('email-list');
    emailList.classList.add('d-flex', 'ai-center', 'jc-center');
    emailList.innerHTML = "<div> \n        <svg width=\"120\" height=\"120\" class=\"va-middle m-auto d-block fill-cool-gray\"><use xlink:href=\"dist/sprite.svg#icon-folder-open-solid\"></use></svg>\n        <p class=\"clr-cool-gray\">No emails in this folder</p>\n        </div>";
  }
  if (clearEmailReader) {
    var emailReader = document.getElementById('email-reader');
    emailReader.classList.add('d-flex', 'ai-center', 'jc-center');
    emailReader.innerHTML = "<div class=\"ta-c\"> \n        <p class=\"clr-cool-gray m-auto mb-4\">No email selected</p>\n        <svg width=\"120\" height=\"120\" class=\"va-middle m-auto d-block fill-cool-gray\" style=\"transform: translateX(-10px);\"><use xlink:href=\"dist/sprite.svg#icon-sparrow-solid\"></use></svg>\n        <p class=\"clr-cool-gray mt-3\">Sparrow Email Client</p>\n        </div>";
  }
};

/**
 * calls highlightElement on clicked item in email list
 * displays the message,subject, profile picture in email reader
 * @param  {Object} data the email data object
 * @param  {Element} eventElement the email item element that needs to be displayed (the item from the list the user clicked on)
 */
var popEmailReader = function popEmailReader(data, eventElement) {
  console.log(_typeof(eventElement));
  // highlight the currently displaced email in email list
  highlightElement(eventElement, 'emailList');
  var emailReader = document.getElementById('email-reader');
  emailReader.classList.remove('d-flex', 'ai-center', 'jc-center');
  var index = eventElement.id;
  var folder = eventElement.dataset.folder;
  var attachment = '';
  if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder][index]['attachment']) {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder][index]['files'].forEach(function (fileName) {
      var fileType = fileName.slice(fileName.length - 3);
      if (fileType == 'pdf') {
        // if extension is pdf add pdf svg
        attachment += "<div class=\"attachment\"><svg width=\"20\" height=\"20\" class=\"va-middle fill-red\"><use xlink:href=\"dist/sprite.svg#icon-file-pdf-solid\"></use></svg><span class=\"va-middle ml-2\">".concat(fileName, "</span></div>");
      } else if (fileType == 'doc') {
        // if extension is doc add doc svg
        attachment += "<div class=\"attachment\"><svg width=\"20\" height=\"20\" class=\"va-middle fill-blue\"><use xlink:href=\"dist/sprite.svg#icon-file-word-solid\"></use></svg><span class=\"va-middle ml-2\">".concat(fileName, "</span></div>");
      } else {
        // if extension is other then those two, add normal file svg
        attachment += "<div class=\"attachment\"><svg width=\"20\" height=\"20\" class=\"va-middle\"><use xlink:href=\"dist/sprite.svg#icon-file-solid\"></use></svg><span class=\"va-middle ml-2\">".concat(fileName, "</span></div>");
      }
    });
  }
  var pictureJpg = 'dist/img/avatar-512x512.jpg'; // by default it's unknown profile picture
  if (data[folder][index]['picture'].length) {
    // if picture exists in json - change it to that picture
    pictureJpg = "dist/img/".concat(data[folder][index]['picture']);
  }
  var pictureWebp = pictureJpg.slice(0, -4) + '.webp'; // remove .jpg and add .webp

  var tag = ''; // default no tags
  if (data[folder][index]['tag'].length > 1) {
    // if tag is available, add that tag class
    tag = "<span class=\"tag--".concat(data[folder][index]['tag'], " email__tag\"></span>");
  }
  emailReader.innerHTML = "\n<div class=\"email__header\">\n    <div class=\"d-flex ai-center jc-space-between flex-wrap\">\n        <div class=\"email__imgContainer\">\n\n            <picture>\n                <source srcset=\"".concat(pictureWebp, "\" type=\"image/webp\">\n                <source srcset=\"").concat(pictureJpg, "\" type=\"image/jpeg\">\n\n                <img src=\"").concat(pictureJpg, "\" alt=\"profile picture\" class=\"fs-sm email__picture\">\n            </picture>\n            ").concat(tag, "\n        </div>\n        <div class=\"ml-4\">\n            <p>").concat(data[folder][index]['subject'], "</p>\n            <div>\n                <span class=\"fs-md clr-cool-gray\">").concat(folder == 'sent' || folder == 'drafts' ? 'To:' : 'From:', "</span>\n\n                <a href=\"javascript:void(0);\" class=\"dropdown fs-sm\" id=\"dropdown\">\n                    <span class=\"va-middle clr-cool-gray\">").concat(data[folder][index]['name'], "</span>\n                    <svg class=\"va-middle fill-cool-gray\" width=\"10\" height=\"10\">\n                        <use xlink:href=\"dist/sprite.svg#icon-chevron-down-solid\"></use>\n                    </svg>\n                    <div class=\"dropdown__content\">\n                        <p>From: ").concat(data[folder][index]['from'], "</p>\n                        <p>To: ").concat(data[folder][index]['to'], "</p>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"btn-group--round\">\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"dist/sprite.svg#icon-star\"></use>\n            </svg>\n        </button>\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"dist/sprite.svg#icon-document-text\"></use>\n            </svg>\n        </button>\n        <button class=\"btn btn-clicked\" id=\"deleteBtn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"dist/sprite.svg#icon-trash-can\"></use>\n            </svg>\n        </button>\n        <button class=\"btn\">\n            <svg class=\"btn__icon\">\n                <use xlink:href=\"dist/sprite.svg#icon-arrow-back-outline\"></use>\n            </svg>\n        </button>\n    </div>\n</div>\n\n<div class=\"email__body\"> \n    <p class=\"email__message\">").concat(data[folder][index]['message'], "</p>\n    \n    <div class=\"email__attachments\">").concat(attachment, "</div>\n</div>");
  if (eventElement.classList.contains('unread')) {
    eventElement.classList.remove('unread'); // remove class unread on email that's opened
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder][index]['unread'] = false; // mark it read on global data
    updateNumber(); // update numbers to reflect the change
  }

  var deleteBtn = document.getElementById('deleteBtn'); // get delete button in email reader
  var dropdown = document.getElementById('dropdown');
  deleteBtn.addEventListener('click', function () {
    deleteEmail(eventElement);
  });
  dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('active');
  });
  dropdown.addEventListener('focusout', function () {
    console.log('nivy poty taku');
    dropdown.classList.remove('active');
  });
};

/**
 * moves email object form gobals.emailData[folder] to gobals.emailData['trash'], clicks on active sidebar button to reload the email list
 * if the email is in trash folder, it deletes the object for trash folder
 * @param  {Element} eventElement the email item element that needs to be deleted
 */
var deleteEmail = function deleteEmail(eventElement) {
  var index = eventElement.id;
  var folder = eventElement.dataset.folder;

  // if the folder we are in, is not trash - move the email to trash
  // if the folder is trash, the email will just be permanently deleted
  if (folder != 'trash') {
    _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData.trash.push(_globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder][index]);
  }

  // eventElement.remove(); // remove the email from email list
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder].splice(index, 1); // removes the email from global array
  updateNumber(); // an email was deleted so update the numbers
  _globals__WEBPACK_IMPORTED_MODULE_0__["default"].activeSidebarMenu.click(); // click on the current active menu to reload email list

  if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].settings.openNextEmailAfterDelete) {
    // checking settings to see if this features is turned on
    var activeElement = document.getElementById(index);
    if (activeElement == null) return; // if no element after the current element exist, quit

    activeElement.click();
  }
};

/**
 * highlights the given element by adding css class
 * @param  {Element} element the element to make active or highlight
 * @param  {string} parentElement which parent element does the element belong to? (sidebarMenu or emailList)
 */
var highlightElement = function highlightElement(element, parentElement) {
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
};

/**
 * updates the number of unread email in inboxBtn text and app title text - inbox (2), sparrow (2)
 * adds the number of emails in each tag from the inbox next to tag text- personal (1), friends (3)
 * adds the number of emails in trash folder next to trash text
 * if no email is available just the text is displayed, the brackets and number are not shown
 */
var updateNumber = function updateNumber() {
  var appHeading = document.getElementById('addHeading');
  var inboxBtnText = document.getElementById('inboxBtnText');
  var trashBtnText = document.getElementById('trashBtnText');
  var personalBtnText = document.getElementById('personalBtnText');
  var clientsBtnText = document.getElementById('clientsBtnText');
  var familyBtnText = document.getElementById('familyBtnText');
  var friendsBtnText = document.getElementById('friendsBtnText');
  var archivesBtnText = document.getElementById('archivesBtnText');
  var unreadEmailNumber = filterObject('inbox', 'unread', true).length;
  appHeading.innerHTML = "sparrow ".concat(unreadEmailNumber == '0' ? '' : '(' + unreadEmailNumber + ')');
  inboxBtnText.innerHTML = "Inbox ".concat(unreadEmailNumber == '0' ? '' : '(' + unreadEmailNumber + ')');
  trashBtnText.innerHTML = "Trash ".concat(_globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData.trash.length == '0' ? '' : '(' + _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData.trash.length + ')');
  var tagList = {
    'personal': personalBtnText,
    'clients': clientsBtnText,
    'family': familyBtnText,
    'friends': friendsBtnText,
    'archives': archivesBtnText
  };
  for (var i in tagList) {
    var number = filterObject('inbox', 'tag', i).length;
    tagList[i].innerHTML = "".concat(i, " ").concat(number == '0' ? '' : '(' + number + ')');
  }
};

/**
 * adds class of 'shown' to element with id of composeBox
 */
var openComposeBox = function openComposeBox() {
  var composeBox = document.getElementById('composeBox');
  composeBox.classList.add('shown');
};

/**
 * removes class of 'shown' from element with id of composeBox
 */
var closeComposeBox = function closeComposeBox() {
  var composeBox = document.getElementById('composeBox');
  composeBox.classList.remove('shown');
  var emailInput = document.getElementById('emailInput');
  var subjectInput = document.getElementById('subjectInput');
  var messageInput = document.getElementById('messageInput');

  // clears the values of inputs on close
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
};

/**
 * looks at gobals.emailData[folder]
 * returns a array of objects  if the key is equal to or matches depends on bool passed on isMatch
 * @param  {string} folder folder to look in gobals.emailData
 * @param  {string} key which key of the object to look for
 * @param  {string} search the value to check for equal/partial match
 * @param  {boolean} isMatch true - returns if it has a partial match false - returns only if search value is equal. | default false
 * @return {Array} returns a array with objects that have key that are equal to or match the search string
 */
var filterObject = function filterObject(folder, key, search) {
  var isMatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isMatch) {
    return _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder].filter(function (obj) {
      return obj[key].toLowerCase().match(search.toLowerCase());
    });
  }
  return _globals__WEBPACK_IMPORTED_MODULE_0__["default"].emailData[folder].filter(function (obj) {
    return obj[key] == search;
  });
};

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFunctions */ "./src/js/domFunctions.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/js/globals.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * fetches json from a url and adds emailData to globals.emailData 
 * then opens the inbox and first email in inbox, finally calls the updateNumber() function
 * @param  {String} url the url to fetch
 */
function getData(_x) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, emailData, inboxBtn, emailList;
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
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.inbox = emailData.inbox;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.sent = emailData.sent;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.starred = emailData.starred;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.drafts = emailData.drafts;
            _globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData.trash = emailData.trash;
            inboxBtn = document.getElementById('inboxBtn');
            emailList = document.getElementById('email-list');
            inboxBtn.click(); // open inbox on page load
            emailList.firstElementChild.click(); // open first email on page load
            (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.updateNumber)(); // update numbers on menus
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            alert('we got an unexpected error - please try later');
            console.log(_context.t0);
          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
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
  'activeEmailList': '',
  'settings': {
    'openNextEmailAfterDelete': true
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globals);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/* harmony import */ var _js_domFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/domFunctions */ "./src/js/domFunctions.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




var url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
// url = 'http://127.0.0.1:5500/emails.json'

var sideBar = document.getElementById('sidebar');
var emailList = document.getElementById('email-list');
var searchBar = document.getElementById('searchBar');
var inboxBtn = document.getElementById('inboxBtn');
var composeCloseBtn = document.getElementById('closeCompose');
var sendEmailBtn = document.getElementById('sendBtn');
(0,_js_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
var data = _js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData;
sideBar.addEventListener('click', function (e) {
  var eventTarget = e.target.closest('button');
  if (eventTarget == null) {
    return; // if user clicked on empty space exist
  } else if (eventTarget.dataset.type == 'folder') {
    var folderName = eventTarget.id.slice(0, -3);
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.defaultScreen)(false, true);
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(data, folderName);
  } else if (eventTarget.dataset.type == 'tag') {
    var search = eventTarget.id.slice(0, -3);
    var result = (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.filterObject)('inbox', 'tag', search);
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.highlightElement)(eventTarget, 'sidebarMenu');
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.defaultScreen)(false, true);
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.popEmailList)({
      'inbox': result
    }, 'inbox');
  } else if (eventTarget.id == 'settingsBtn') {
    var popup = document.getElementById('popup');
    var toggle = document.getElementById('setting_toggle');
    popup.classList.add('shown');
    toggle.addEventListener('change', function () {
      _js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].settings.openNextEmailAfterDelete = /true/i.test(toggle.value);
    });
  } else if (eventTarget.id == 'composeBtn') {
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.openComposeBox)();
  } else {
    return;
  }
});
composeCloseBtn.addEventListener('click', _js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.closeComposeBox);
sendEmailBtn.addEventListener('click', _js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.closeComposeBox);
emailList.addEventListener('click', function (e) {
  var eventTarget = e.target.closest('li');
  if (eventTarget == null) return;
  (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.popEmailReader)(_js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData, eventTarget);
});
searchBar.addEventListener('keyup', function (e) {
  var searchText = searchBar.value;
  if (e.key == 'Enter') {
    e.preventDefault();
    var currentActiveMenuBtn = _js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].activeSidebarMenu;
    var folderName = currentActiveMenuBtn.id.slice(0, -3);
    if (currentActiveMenuBtn.dataset.type == 'folder') {
      var result = (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.filterObject)(folderName, 'subject', searchText, true);
      var resultObj = {};
      resultObj[folderName] = result;
      (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.popEmailList)(resultObj, folderName);
    } else if (currentActiveMenuBtn.dataset.type == 'tag') {
      var _result = (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.filterObject)('inbox', 'tag', folderName);
      _js_globals__WEBPACK_IMPORTED_MODULE_1__["default"].emailData[folderName] = _result;
      _result = (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.filterObject)(folderName, 'subject', searchText, true);
      (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.popEmailList)({
        'inbox': _result
      }, 'inbox');
    }
    (0,_js_domFunctions__WEBPACK_IMPORTED_MODULE_2__.defaultScreen)(false, true);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map