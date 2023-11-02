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
exports.id = "pages/api/gpw";
exports.ids = ["pages/api/gpw"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/gpw.js":
/*!**************************!*\
  !*** ./pages/api/gpw.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getpendingwithdraw\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3B3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVYLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFDSCxHQUFHLENBQUNJLElBQUk7WUFHdEIsSUFBSUMsTUFBTSxHQUFHO2dCQUNYSCxNQUFNLEVBQUUsTUFBTTtnQkFDZEksR0FBRyxFQUFFLDREQUE0RDtnQkFDakVDLE9BQU8sRUFBQztvQkFDTixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQyxDQUFDO2lCQUNyQzthQUNBO1lBQ0QsTUFBTUwsNENBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNHLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLElBQUksRUFBRUwsUUFBUSxDQUFDSyxJQUFJO2lCQUFDLENBQUMsQ0FBQzthQUM5QyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sR0FBRyxDQUFDLENBQUM7WUFDakJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL2dwdy5qcz85MWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge3Rva2VufT1yZXEuYm9keVxuICAgICBcbiAgICAgIFxuICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi9nZXRwZW5kaW5nd2l0aGRyYXdcIixcbiAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/gpw.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gpw.js"));
module.exports = __webpack_exports__;

})();