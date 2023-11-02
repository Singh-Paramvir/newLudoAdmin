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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"to be send to api!!!!!!!!!!\");\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/auth/adminlogin\",\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDakQsSUFBSUksTUFBTSxHQUFHO2dCQUNYTCxNQUFNLEVBQUUsTUFBTTtnQkFDZE0sR0FBRyxFQUFFLG1EQUFtRDtnQkFBQ0wsSUFBSTthQUM5RDtZQUNELE1BQU1MLDRDQUFLLENBQUNTLE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ0wsT0FBTyxDQUFDQyxHQUFHLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDRixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFWCxJQUFJLEVBQUVPLFFBQVEsQ0FBQ1AsSUFBSTtpQkFBQyxDQUFDLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPWSxHQUFHLEVBQUU7WUFDWlYsT0FBTyxDQUFDQyxHQUFHLENBQUNTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCBcInRvIGJlIHNlbmQgdG8gYXBpISEhISEhISEhIVwiKTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYXV0aC9hZG1pbmxvZ2luXCIsZGF0YVxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGF9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

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