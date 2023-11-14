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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "circular-json":
/*!********************************!*\
  !*** external "circular-json" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("circular-json");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circular-json */ \"circular-json\");\n/* harmony import */ var circular_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(circular_json__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            const agent = new (https__WEBPACK_IMPORTED_MODULE_1___default().Agent)({\n                rejectUnauthorized: false\n            });\n            console.log(data, \"to be send to api!!!!!!!!!!\");\n            var config = {\n                method: \"post\",\n                url: \"https://airaicloud.com:6000/api/v1/auth/adminlogin\",\n                data,\n                httpsAgent: agent\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            console.log(circular_json__WEBPACK_IMPORTED_MODULE_2___default().stringify(response.data));\n            res.status(200).json({\n                data: circular_json__WEBPACK_IMPORTED_MODULE_2___default().parse(circular_json__WEBPACK_IMPORTED_MODULE_2___default().stringify(response.data))\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBQ2U7QUFFMUIsZUFBZUcsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCLE1BQU1DLEtBQUssR0FBRyxJQUFJUixvREFBVyxDQUFDO2dCQUM1QlUsa0JBQWtCLEVBQUUsS0FBSzthQUMxQixDQUFDO1lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztZQUVqRCxJQUFJTyxNQUFNLEdBQUc7Z0JBQ1hSLE1BQU0sRUFBRSxNQUFNO2dCQUNkUyxHQUFHLEVBQUUsb0RBQW9EO2dCQUN6RFIsSUFBSTtnQkFDSlMsVUFBVSxFQUFFUCxLQUFLO2FBQ2xCO1lBRUQsTUFBTVEsUUFBUSxHQUFHLE1BQU1qQiw0Q0FBSyxDQUFDYyxNQUFNLENBQUM7WUFDcENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCw4REFBc0IsQ0FBQ2UsUUFBUSxDQUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ERixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFYixJQUFJLEVBQUVMLDBEQUFrQixDQUFDQSw4REFBc0IsQ0FBQ2UsUUFBUSxDQUFDVixJQUFJLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUMzRixDQUFDLE9BQU9lLEdBQUcsRUFBRTtZQUNaVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDLENBQUM7WUFDakJqQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRyxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCBDaXJjdWxhckpTT04gZnJvbSAnY2lyY3VsYXItanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IGFnZW50ID0gbmV3IGh0dHBzLkFnZW50KHtcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJ0byBiZSBzZW5kIHRvIGFwaSEhISEhISEhISFcIik7XG4gICAgXG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hdXRoL2FkbWlubG9naW5cIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaHR0cHNBZ2VudDogYWdlbnRcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoY29uZmlnKTtcbiAgICAgIGNvbnNvbGUubG9nKENpcmN1bGFySlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBDaXJjdWxhckpTT04ucGFyc2UoQ2lyY3VsYXJKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSkgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaHR0cHMiLCJDaXJjdWxhckpTT04iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJhZ2VudCIsIkFnZW50IiwicmVqZWN0VW5hdXRob3JpemVkIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInVybCIsImh0dHBzQWdlbnQiLCJyZXNwb25zZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJwYXJzZSIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();