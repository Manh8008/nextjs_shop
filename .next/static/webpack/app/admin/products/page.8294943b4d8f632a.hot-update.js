"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/products/page",{

/***/ "(app-pages-browser)/./src/components/admin/CustomConfirm.jsx":
/*!************************************************!*\
  !*** ./src/components/admin/CustomConfirm.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ \"(app-pages-browser)/./node_modules/sweetalert2/src/sweetalert2.scss\");\n\n\nconst CustomConfirm = (title, icon)=>{\n    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n        title: title,\n        icon: icon,\n        showDenyButton: true,\n        showCancelButton: true,\n        confirmButtonText: \"Yes\",\n        denyButtonText: \"No\",\n        customClass: {\n            title: \"custom-alert-title\"\n        }\n    });\n};\n_c = CustomConfirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomConfirm);\nvar _c;\n$RefreshReg$(_c, \"CustomConfirm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FkbWluL0N1c3RvbUNvbmZpcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBK0I7QUFDVztBQUUxQyxNQUFNQyxnQkFBZ0IsQ0FBQ0MsT0FBT0M7SUFDMUIsT0FBT0gsdURBQVMsQ0FBQztRQUNiRSxPQUFPQTtRQUNQQyxNQUFNQTtRQUNORSxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsbUJBQW1CO1FBQ25CQyxnQkFBaUI7UUFDakJDLGFBQWE7WUFDVFAsT0FBTztRQUNYO0lBQ0o7QUFDSjtLQVpNRDtBQWNOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FkbWluL0N1c3RvbUNvbmZpcm0uanN4PzRiNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBcInN3ZWV0YWxlcnQyL3NyYy9zd2VldGFsZXJ0Mi5zY3NzXCI7XHJcblxyXG5jb25zdCBDdXN0b21Db25maXJtID0gKHRpdGxlLCBpY29uKSA9PiB7XHJcbiAgICByZXR1cm4gU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICBzaG93RGVueUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgIGRlbnlCdXR0b25UZXh0OiBgTm9gLFxyXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcImN1c3RvbS1hbGVydC10aXRsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUNvbmZpcm07XHJcbiJdLCJuYW1lcyI6WyJTd2FsIiwiQ3VzdG9tQ29uZmlybSIsInRpdGxlIiwiaWNvbiIsImZpcmUiLCJzaG93RGVueUJ1dHRvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImRlbnlCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/admin/CustomConfirm.jsx\n"));

/***/ })

});