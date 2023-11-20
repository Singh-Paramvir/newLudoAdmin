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
exports.id = "pages/api/updateround";
exports.ids = ["pages/api/updateround"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/updateround.js":
/*!**********************************!*\
  !*** ./pages/api/updateround.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/updateslotes\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlcm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzFCLDJCQUEyQjtBQUNaLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFDSCxHQUFHLENBQUNJLElBQUk7WUFDdEIsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1lBQ3ZCLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsTUFBTTtZQUNOLElBQUlFLE1BQU0sR0FBRztnQkFDWEosTUFBTSxFQUFFLE1BQU07Z0JBQ2RLLEdBQUcsRUFBRSxzREFBc0Q7Z0JBQzNEQyxPQUFPLEVBQUM7b0JBQ04sZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FBQztpQkFDckM7Z0JBQUNFLElBQUk7YUFFTDtZQUNELE1BQU1QLDRDQUFLLENBQUNRLE1BQU0sQ0FBQyxDQUFDRyxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixRQUFRLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDSixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFWCxJQUFJLEVBQUVLLFFBQVEsQ0FBQ0wsSUFBSTtpQkFBQyxDQUFDLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPWSxHQUFHLEVBQUU7WUFDWk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS91cGRhdGVyb3VuZC5qcz8wMDAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge3Rva2VufT1yZXEuYm9keVxuICAgICAgY29uc3Qge2RhdGF9ID0gcmVxLmJvZHk7XG4gICAgICAvLyBjb25zdCBhZ2VudCA9IG5ldyBodHRwLkFnZW50KHtcbiAgICAgIC8vICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgIC8vIH0pO1xuICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi91cGRhdGVzbG90ZXNcIixcbiAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sZGF0YSxcbiAgICAgIC8vIGh0dHBBZ2VudDogYWdlbnQsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateround.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateround.js"));
module.exports = __webpack_exports__;

})();