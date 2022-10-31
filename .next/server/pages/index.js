(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_common_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/components/common/seo */ "./src/components/common/seo/index.tsx");
/* harmony import */ var _src_components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/components/home */ "./src/components/home/index.ts");


var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\pages\\index.tsx";



function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_common_seo__WEBPACK_IMPORTED_MODULE_1__.default, {
      canonicalPath: "/",
      title: "LikelionSungGuk Blog"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_home__WEBPACK_IMPORTED_MODULE_2__.Welcome, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/common/seo/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/seo/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlogJSONLD": function() { return /* binding */ getBlogJSONLD; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\src\\components\\common\\seo\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BASE_URL = "https://likelionSungGuk.github.io/";

function SEO({
  canonicalPath,
  title,
  description = "Frontend Dev likelionSungGuk Blog",
  imageUrl = "",
  type = "website",
  jsonld = {}
}) {
  const url = BASE_URL + canonicalPath;
  const openGraphTags = [{
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: description
  }, {
    property: "og:image",
    content: imageUrl
  }, {
    property: "og:url",
    content: url
  }, {
    property: "og:type",
    content: type
  }].filter(v => !!v.content);
  const twitterTags = [{
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: title
  }, {
    name: "twitter:description",
    content: description
  }, {
    name: "twitter:image",
    content: imageUrl
  }, {
    name: "twitter:description",
    content: description
  }].filter(v => !!v.content);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: `${title}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, "description", false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), openGraphTags.map(prop => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", _objectSpread({}, prop), prop.property, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this)), twitterTags.map(prop => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", _objectSpread({}, prop), prop.name, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "canonical",
      href: url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), Object.keys(jsonld).length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
      type: "application/ld+json",
      children: JSON.stringify(jsonld)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

const getBlogJSONLD = ({
  path,
  title,
  imageUrl,
  description,
  datePublished
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  image: imageUrl,
  editor: "likelionSungGuk",
  url: BASE_URL + path,
  datePublished,
  dateCreated: datePublished,
  dateModified: datePublished,
  description: description,
  author: {
    "@type": "Person",
    name: "likelionSungGuk"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/home/index.ts":
/*!**************************************!*\
  !*** ./src/components/home/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Welcome": function() { return /* reexport safe */ _welcome__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ "./src/components/home/welcome/index.tsx");


/***/ }),

/***/ "./src/components/home/welcome/index.style.ts":
/*!****************************************************!*\
  !*** ./src/components/home/welcome/index.style.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/styles/theme */ "./src/styles/theme.ts");


const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;

  width: 100%;
  height: 100%;
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  position: absolute;
  top: 20vh;
  left: 0;
  right: 0;

  margin: 0 1rem;

  text-align: center;
  font-size: 5.2vw;
  font-weight: 700;
  white-space: break-spaces;
  line-height: 1.3;

  text-shadow: #007fd440 0.3rem 0.3rem;

  ${_src_styles_theme__WEBPACK_IMPORTED_MODULE_1__.breakpoints.medium} {
    font-size: 2.2rem;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = ({
  Wrapper,
  Title
});

/***/ }),

/***/ "./src/components/home/welcome/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/home/welcome/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Welcome; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.style */ "./src/components/home/welcome/index.style.ts");

var _jsxFileName = "C:\\Users\\sungkook\\Documents\\dev\\likelionSungGuk.github.io\\src\\components\\home\\welcome\\index.tsx";

function Welcome() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_style__WEBPACK_IMPORTED_MODULE_1__.default.Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_style__WEBPACK_IMPORTED_MODULE_1__.default.Title, {
      children: `Daily improving \n Frontend 개발자 조성국입니다.`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakpoints": function() { return /* binding */ breakpoints; }
/* harmony export */ });
const breakpoints = {
  small: "@media (max-width: 600px)",
  medium: "@media (max-width: 768px)",
  large: "@media (min-width: 769px)"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtbGlva2VsaW9uc3VuZ2d1ay8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly92c2NvZGUtbGlva2VsaW9uc3VuZ2d1ay8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zZW8vaW5kZXgudHN4Iiwid2VicGFjazovL3ZzY29kZS1saW9rZWxpb25zdW5nZ3VrLy4vc3JjL2NvbXBvbmVudHMvaG9tZS93ZWxjb21lL2luZGV4LnN0eWxlLnRzIiwid2VicGFjazovL3ZzY29kZS1saW9rZWxpb25zdW5nZ3VrLy4vc3JjL2NvbXBvbmVudHMvaG9tZS93ZWxjb21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly92c2NvZGUtbGlva2VsaW9uc3VuZ2d1ay8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWxpb2tlbGlvbnN1bmdndWsvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly92c2NvZGUtbGlva2VsaW9uc3VuZ2d1ay9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZzY29kZS1saW9rZWxpb25zdW5nZ3VrL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIkJBU0VfVVJMIiwiU0VPIiwiY2Fub25pY2FsUGF0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsInR5cGUiLCJqc29ubGQiLCJ1cmwiLCJvcGVuR3JhcGhUYWdzIiwicHJvcGVydHkiLCJjb250ZW50IiwiZmlsdGVyIiwidiIsInR3aXR0ZXJUYWdzIiwibmFtZSIsIm1hcCIsInByb3AiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEJsb2dKU09OTEQiLCJwYXRoIiwiZGF0ZVB1Ymxpc2hlZCIsImhlYWRsaW5lIiwiaW1hZ2UiLCJlZGl0b3IiLCJkYXRlQ3JlYXRlZCIsImRhdGVNb2RpZmllZCIsImF1dGhvciIsIldyYXBwZXIiLCJzdHlsZWQiLCJUaXRsZSIsImJyZWFrcG9pbnRzIiwiV2VsY29tZSIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLCtEQUFEO0FBQUssbUJBQWEsRUFBQyxHQUFuQjtBQUF1QixXQUFLLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFNRDs7QUFFRCwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQSxNQUFNQyxRQUFRLEdBQUcsb0NBQWpCOztBQVdBLFNBQVNDLEdBQVQsQ0FBYTtBQUNYQyxlQURXO0FBRVhDLE9BRlc7QUFHWEMsYUFBVyxHQUFHLG1DQUhIO0FBSVhDLFVBQVEsR0FBRyxFQUpBO0FBS1hDLE1BQUksR0FBRyxTQUxJO0FBTVhDLFFBQU0sR0FBRztBQU5FLENBQWIsRUFPYTtBQUNYLFFBQU1DLEdBQUcsR0FBR1IsUUFBUSxHQUFHRSxhQUF2QjtBQUVBLFFBQU1PLGFBQWEsR0FBRyxDQUNwQjtBQUFFQyxZQUFRLEVBQUUsVUFBWjtBQUF3QkMsV0FBTyxFQUFFUjtBQUFqQyxHQURvQixFQUVwQjtBQUFFTyxZQUFRLEVBQUUsZ0JBQVo7QUFBOEJDLFdBQU8sRUFBRVA7QUFBdkMsR0FGb0IsRUFHcEI7QUFBRU0sWUFBUSxFQUFFLFVBQVo7QUFBd0JDLFdBQU8sRUFBRU47QUFBakMsR0FIb0IsRUFJcEI7QUFBRUssWUFBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQU8sRUFBRUg7QUFBL0IsR0FKb0IsRUFLcEI7QUFBRUUsWUFBUSxFQUFFLFNBQVo7QUFBdUJDLFdBQU8sRUFBRUw7QUFBaEMsR0FMb0IsRUFNcEJNLE1BTm9CLENBTVpDLENBQUQs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bUI7QUFDaEMsc0JBQ0UsOERBQUMseURBQUQ7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFBLGdCQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7OztBQ1hELE1BQU1ELFdBQVcsR0FBRztBQUNsQkUsT0FBSyxFQUFFLDJCQURXO0FBRWxCQyxRQUFNLEVBQUUsMkJBRlU7QUFHbEJDLE9BQUssRUFBRTtBQUhXLENBQXBCOzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRU8gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9jb21tb24vc2VvXCI7XHJcbmltcG9ydCB7IFdlbGNvbWUgfSBmcm9tIFwiQHNyYy9jb21wb25lbnRzL2hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U0VPIGNhbm9uaWNhbFBhdGg9XCIvXCIgdGl0bGU9XCJMaWtlbGlvblN1bmdHdWsgQmxvZ1wiIC8+XHJcbiAgICAgIDxXZWxjb21lIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vbGlrZWxpb25TdW5nR3VrLmdpdGh1Yi5pby9cIjtcclxuXHJcbnR5cGUgU0VPUHJvcHMgPSB7XHJcbiAgY2Fub25pY2FsUGF0aDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBqc29ubGQ/OiBSZWNvcmQ8YW55LCBhbnk+O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gU0VPKHtcclxuICBjYW5vbmljYWxQYXRoLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uID0gXCJGcm9udGVuZCBEZXYgbGlrZWxpb25TdW5nR3VrIEJsb2dcIixcclxuICBpbWFnZVVybCA9IFwiXCIsXHJcbiAgdHlwZSA9IFwid2Vic2l0ZVwiLFxyXG4gIGpzb25sZCA9IHt9LFxyXG59OiBTRU9Qcm9wcykge1xyXG4gIGNvbnN0IHVybCA9IEJBU0VfVVJMICsgY2Fub25pY2FsUGF0aDtcclxuXHJcbiAgY29uc3Qgb3BlbkdyYXBoVGFncyA9IFtcclxuICAgIHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogdGl0bGUgfSxcclxuICAgIHsgcHJvcGVydHk6IFwib2c6ZGVzY3JpcHRpb25cIiwgY29udGVudDogZGVzY3JpcHRpb24gfSxcclxuICAgIHsgcHJvcGVydHk6IFwib2c6aW1hZ2VcIiwgY29udGVudDogaW1hZ2VVcmwgfSxcclxuICAgIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IHVybCB9LFxyXG4gICAgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IHR5cGUgfSxcclxuICBdLmZpbHRlcigodikgPT4gISF2LmNvbnRlbnQpO1xyXG5cclxuICBjb25zdCB0d2l0dGVyVGFncyA9IFtcclxuICAgIHsgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIiwgY29udGVudDogXCJzdW1tYXJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJ0d2l0dGVyOnRpdGxlXCIsIGNvbnRlbnQ6IHRpdGxlIH0sXHJcbiAgICB7IG5hbWU6IFwidHdpdHRlcjpkZXNjcmlwdGlvblwiLCBjb250ZW50OiBkZXNjcmlwdGlvbiB9LFxyXG4gICAgeyBuYW1lOiBcInR3aXR0ZXI6aW1hZ2VcIiwgY29udGVudDogaW1hZ2VVcmwgfSxcclxuICAgIHsgbmFtZTogXCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH0sXHJcbiAgXS5maWx0ZXIoKHYpID0+ICEhdi5jb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e2Ake3RpdGxlfWB9PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IGtleT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAge29wZW5HcmFwaFRhZ3MubWFwKChwcm9wKSA9PiAoXHJcbiAgICAgICAgPG1ldGEga2V5PXtwcm9wLnByb3BlcnR5fSB7Li4ucHJvcH0gLz5cclxuICAgICAgKSl9XHJcbiAgICAgIHt0d2l0dGVyVGFncy5tYXAoKHByb3ApID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e3Byb3AubmFtZX0gey4uLnByb3B9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXt1cmx9IC8+XHJcbiAgICAgIHtPYmplY3Qua2V5cyhqc29ubGQpLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj57SlNPTi5zdHJpbmdpZnkoanNvbmxkKX08L3NjcmlwdD5cclxuICAgICAgKX1cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QmxvZ0pTT05MRCA9ICh7XHJcbiAgcGF0aCxcclxuICB0aXRsZSxcclxuICBpbWFnZVVybCxcclxuICBkZXNjcmlwdGlvbixcclxuICBkYXRlUHVibGlzaGVkLFxyXG59OiB7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBkYXRlUHVibGlzaGVkOiBzdHJpbmc7XHJcbn0pID0+ICh7XHJcbiAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxyXG4gIFwiQHR5cGVcIjogXCJCbG9nUG9zdGluZ1wiLFxyXG4gIGhlYWRsaW5lOiB0aXRsZSxcclxuICBpbWFnZTogaW1hZ2VVcmwsXHJcbiAgZWRpdG9yOiBcImxpa2VsaW9uU3VuZ0d1a1wiLFxyXG4gIHVybDogQkFTRV9VUkwgKyBwYXRoLFxyXG4gIGRhdGVQdWJsaXNoZWQsXHJcbiAgZGF0ZUNyZWF0ZWQ6IGRhdGVQdWJsaXNoZWQsXHJcbiAgZGF0ZU1vZGlmaWVkOiBkYXRlUHVibGlzaGVkLFxyXG4gIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICBhdXRob3I6IHtcclxuICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcclxuICAgIG5hbWU6IFwibGlrZWxpb25TdW5nR3VrXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU87XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gXCJAc3JjL3N0eWxlcy90aGVtZVwiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHZoO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1LjJ2dztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuXHJcbiAgdGV4dC1zaGFkb3c6ICMwMDdmZDQ0MCAwLjNyZW0gMC4zcmVtO1xyXG5cclxuICAke2JyZWFrcG9pbnRzLm1lZGl1bX0ge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFdyYXBwZXIsXHJcbiAgVGl0bGUsXHJcbn07XHJcbiIsImltcG9ydCBXYXZlcyBmcm9tIFwiLi93YXZlc1wiO1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL2luZGV4LnN0eWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGUuV3JhcHBlcj5cclxuICAgICAgPFN0eWxlLlRpdGxlPntgRGFpbHkgaW1wcm92aW5nIFxcbiBGcm9udGVuZCDqsJzrsJzsnpAg7KGw7ISx6rWt7J6F64uI64ukLmB9PC9TdHlsZS5UaXRsZT5cclxuICAgICAgey8qIDxXYXZlcyAvPiAqL31cclxuICAgIDwvU3R5bGUuV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiIsImNvbnN0IGJyZWFrcG9pbnRzID0ge1xyXG4gIHNtYWxsOiBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIixcclxuICBtZWRpdW06IFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KVwiLFxyXG4gIGxhcmdlOiBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjlweClcIixcclxufTtcclxuXHJcbmV4cG9ydCB7IGJyZWFrcG9pbnRzIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==