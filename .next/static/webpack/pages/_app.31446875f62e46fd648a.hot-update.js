self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/blog-layout/search-section/index.tsx":
/*!**********************************************************!*\
  !*** ./src/layouts/blog-layout/search-section/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchSection; }
/* harmony export */ });
/* harmony import */ var C_Users_sungkook_Documents_dev_likelionSungGuk_github_io_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./.yarn/unplugged/styled-components-virtual-4118695063/node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/layouts/blog-layout/search-section/search/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\src\\layouts\\blog-layout\\search-section\\index.tsx";

function _templateObject() {
  var data = (0,C_Users_sungkook_Documents_dev_likelionSungGuk_github_io_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function SearchSection() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "SearchSection"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = SearchSection;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject());
_c2 = Wrapper;

var _c, _c2;

$RefreshReg$(_c, "SearchSection");
$RefreshReg$(_c2, "Wrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/layouts/blog-layout/search-section/search/SearchInput.tsx":
/*!***********************************************************************!*\
  !*** ./src/layouts/blog-layout/search-section/search/SearchInput.tsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_sungkook_Documents_dev_likelionSungGuk_github_io_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-64964a0fd1.zip/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./.yarn/unplugged/styled-components-virtual-4118695063/node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\src\\layouts\\blog-layout\\search-section\\search\\SearchInput.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_sungkook_Documents_dev_likelionSungGuk_github_io_yarn_cache_babel_runtime_npm_7_12_5_b3edb8ee8e_64964a0fd1_zip_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var SearchInput = function SearchInput() {
  _s();

  var searchKeyword = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log('inputvalue', searchKeyword.current.value);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledInput, {
    type: "text",
    name: "searchKeyword",
    value: searchKeyword.current.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(SearchInput, "6OFoXGVC0BRqYRTKxQaM2qTKOHU=");

_c = SearchInput;
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.input(_templateObject());
_c2 = StyledInput;

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "StyledInput");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/layouts/blog-layout/search-section/search/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/layouts/blog-layout/search-section/search/index.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_contexts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/contexts/app */ "./src/contexts/app/index.tsx");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchInput */ "./src/layouts/blog-layout/search-section/search/SearchInput.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\src\\layouts\\blog-layout\\search-section\\search\\index.tsx",
    _s = $RefreshSig$();




function Search() {
  _s();

  var _useAppContext = (0,_src_contexts_app__WEBPACK_IMPORTED_MODULE_2__.useAppContext)(),
      posts = _useAppContext.state.posts;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Search, "gUh38kRdjZ5lIgi7L4YmgaRm/3E=", false, function () {
  return [_src_contexts_app__WEBPACK_IMPORTED_MODULE_2__.useAppContext];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvYmxvZy1sYXlvdXQvc2VhcmNoLXNlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9ibG9nLWxheW91dC9zZWFyY2gtc2VjdGlvbi9zZWFyY2gvU2VhcmNoSW5wdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9ibG9nLWxheW91dC9zZWFyY2gtc2VjdGlvbi9zZWFyY2gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNlYXJjaFNlY3Rpb24iLCJXcmFwcGVyIiwic3R5bGVkIiwiU2VhcmNoSW5wdXQiLCJzZWFyY2hLZXl3b3JkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ2YWx1ZSIsIlN0eWxlZElucHV0IiwiU2VhcmNoIiwidXNlQXBwQ29udGV4dCIsInBvc3RzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7S0FQdUJBLGE7QUFTeEIsSUFBTUMsT0FBTyxHQUFHQywwREFBSCxtQkFBYjtNQUFNRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk47QUFDQTs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLGFBQWEsR0FBR0MsNkNBQU0sQ0FBQyxFQUFELENBQTVCO0FBRUFDLGtEQUFTLENBQUMsWUFBSTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSixhQUFhLENBQUNLLE9BQWQsQ0FBc0JDLEtBQWhEO0FBQ0QsR0FGUSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsV0FBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLGVBRlA7QUFHRSxTQUFLLEVBQUVOLGFBQWEsQ0FBQ0ssT0FBZCxDQUFzQkM7QUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FkRDs7R0FBTVAsVzs7S0FBQUEsVztBQWdCTiwrREFBZUEsV0FBZjtBQUVBLElBQU1RLFdBQVcsR0FBR1QsNERBQUgsbUJBQWpCO01BQU1TLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk47QUFJQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLHVCQUczQkMsZ0VBQWEsRUFIYztBQUFBLE1BRXBCQyxLQUZvQixrQkFFN0JDLEtBRjZCLENBRXBCRCxLQUZvQjs7QUFLL0Isc0JBQ0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0dBUnVCRixNO1VBR2xCQyw0RDs7O0tBSGtCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzE0NDY4NzVmNjJlNDZmZDY0OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFNlY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8aDE+U2VhcmNoU2VjdGlvbjwvaDE+XHJcbiAgICAgIDxTZWFyY2ggLz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hLZXl3b3JkID0gdXNlUmVmKFwiXCIpXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2lucHV0dmFsdWUnLCBzZWFyY2hLZXl3b3JkLmN1cnJlbnQudmFsdWUpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRJbnB1dCBcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBuYW1lPVwic2VhcmNoS2V5d29yZFwiXHJcbiAgICAgIHZhbHVlPXtzZWFyY2hLZXl3b3JkLmN1cnJlbnQudmFsdWV9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXRcclxuXHJcbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIFxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEFjY29yZGlvblNlY3Rpb24gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9jb21tb24vYWNjb3JkaW9uLXNlY3Rpb25cIjtcclxuaW1wb3J0IFRhZyBmcm9tIFwiQHNyYy9jb21wb25lbnRzL2NvbW1vbi90YWdcIjtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCJAc3JjL2NvbnRleHRzL2FwcFwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4vU2VhcmNoSW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHN0YXRlOiB7IHBvc3RzIH0sXHJcbiAgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hJbnB1dCAvPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=