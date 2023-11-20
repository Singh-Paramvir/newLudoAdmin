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
exports.id = "pages/api/getapproverequest";
exports.ids = ["pages/api/getapproverequest"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/getapproverequest.js":
/*!****************************************!*\
  !*** ./pages/api/getapproverequest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getapproverequest\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YXBwcm92ZXJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzFCLDJCQUEyQjtBQUNaLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFDSCxHQUFHLENBQUNJLElBQUk7WUFDdEIsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1lBQ3ZCLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0IsTUFBTTtZQUNOLElBQUlFLE1BQU0sR0FBRztnQkFDWEosTUFBTSxFQUFFLE1BQU07Z0JBQ2RLLEdBQUcsRUFBRSwyREFBMkQ7Z0JBQ2hFQyxPQUFPLEVBQUM7b0JBQ04sZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FBQztpQkFDckM7Z0JBQUNFLElBQUk7YUFDTDtZQUNELE1BQU1QLDRDQUFLLENBQUNRLE1BQU0sQ0FBQyxDQUFDRyxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixRQUFRLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDSixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFWCxJQUFJLEVBQUVLLFFBQVEsQ0FBQ0wsSUFBSTtpQkFBQyxDQUFDLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPWSxHQUFHLEVBQUU7WUFDWk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9nZXRhcHByb3ZlcmVxdWVzdC5qcz9lNjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge3Rva2VufT1yZXEuYm9keVxuICAgICAgY29uc3Qge2RhdGF9ID0gcmVxLmJvZHk7XG4gICAgICAvLyBjb25zdCBhZ2VudCA9IG5ldyBodHRwLkFnZW50KHtcbiAgICAgIC8vICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgIC8vIH0pO1xuICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi9nZXRhcHByb3ZlcmVxdWVzdFwiLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxkYXRhLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGF9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJkYXRhIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getapproverequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getapproverequest.js"));
module.exports = __webpack_exports__;

})();