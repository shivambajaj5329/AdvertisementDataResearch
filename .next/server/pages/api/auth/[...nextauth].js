"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"582186989299-tgau0l21ahi026a9u6b14l119grmdrnm.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        })\n    ],\n    secret: '73OVB0KI2kBr41Pw2qpZZ2P1gkFoxlCcZxYV72E+NrA=',\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDdkIsRUFBaUQ7SUFDakRFLFNBQVMsRUFBRSxDQUFDO1FBQ1ZELGlFQUFjLENBQUMsQ0FBQztZQUNkRSxRQUFRLEVBQUUsQ0FBMEU7WUFDcEZDLFlBQVksRUFBRSxDQUFxQztRQUNyRCxDQUFDO0lBRUgsQ0FBQztJQUVGQyxNQUFNLEVBQUUsQ0FBOEM7SUFFckRDLEtBQUssRUFBQyxDQUFDO1FBQ0hDLE1BQU0sRUFBRSxDQUFjO0lBQzFCLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby1kaXNwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IFwiNTgyMTg2OTg5Mjk5LXRnYXUwbDIxYWhpMDI2YTl1NmIxNGwxMTlncm1kcm5tLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICBjbGllbnRTZWNyZXQ6IFwiR09DU1BYLXNmeFAzVVl0ZE9pVGZVMURSanNFMURjXzlyeWRcIixcbiAgICB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxuIFxuIHNlY3JldDogJzczT1ZCMEtJMmtCcjQxUHcycXBaWjJQMWdrRm94bENjWnhZVjcyRStOckE9JyxcblxuICBwYWdlczp7XG4gICAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXG4gIH0sXG59KSBcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJzZWNyZXQiLCJwYWdlcyIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();