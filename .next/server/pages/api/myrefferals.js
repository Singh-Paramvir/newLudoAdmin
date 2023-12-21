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
exports.id = "pages/api/myrefferals";
exports.ids = ["pages/api/myrefferals"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/myrefferals.js":
/*!**********************************!*\
  !*** ./pages/api/myrefferals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(token, \"to be sent to the API!\", data);\n            const config = {\n                timeout: 20000,\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getalluser\",\n                headers: {\n                    Authorization: `Bearer ${token}`\n                },\n                data\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            console.log(JSON.stringify(response.data));\n            res.status(200).json({\n                data: response.data\n            });\n        } catch (error) {\n            console.error(error);\n            if (error.response) {\n                res.status(error.response.status).json({\n                    error: error.response.data\n                });\n            } else if (error.request) {\n                res.status(504).json({\n                    error: \"Gateway Timeout: No response received from the server\"\n                });\n            } else {\n                res.status(500).json({\n                    error: error.message\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXlyZWZmZXJhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtZQUMxQixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHTCxHQUFHLENBQUNJLElBQUk7WUFDekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLEVBQUUsd0JBQXdCLEVBQUVFLElBQUksQ0FBQyxDQUFDO1lBRW5ELE1BQU1HLE1BQU0sR0FBRztnQkFDYkMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RQLE1BQU0sRUFBRSxNQUFNO2dCQUNkUSxHQUFHLEVBQUUsb0RBQW9EO2dCQUN6REMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVULEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFDREUsSUFBSTthQUNMO1lBRUQsTUFBTVEsUUFBUSxHQUFHLE1BQU1mLDRDQUFLLENBQUNVLE1BQU0sQ0FBQztZQUVwQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNSLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0NKLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVaLElBQUksRUFBRVEsUUFBUSxDQUFDUixJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQy9DLENBQUMsT0FBT2EsS0FBSyxFQUFFO1lBQ2RaLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztZQUVyQixJQUFJQSxLQUFLLENBQUNMLFFBQVEsRUFBRTtnQkFDbEJaLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDRSxLQUFLLENBQUNMLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNMLFFBQVEsQ0FBQ1IsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDeEUsTUFBTSxJQUFJYSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDeEJsQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsdURBQXVEO2lCQUFFLENBQUMsQ0FBQzthQUMxRixNQUFNO2dCQUNMakIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNFLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7S0FDRixNQUFNO1FBQ0xuQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDdkQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9teXJlZmZlcmFscy5qcz9kMGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHRva2VuIH0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbiwgJ3RvIGJlIHNlbnQgdG8gdGhlIEFQSSEnLCBkYXRhKTtcblxuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICB0aW1lb3V0OiAyMDAwMCwgLy8gU2V0IHRoZSB0aW1lb3V0IHRvIDIwIHNlY29uZHNcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi9nZXRhbGx1c2VyJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oeyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgICAgICByZXMuc3RhdHVzKDUwNCkuanNvbih7IGVycm9yOiAnR2F0ZXdheSBUaW1lb3V0OiBObyByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXInIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInRpbWVvdXQiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInJlcXVlc3QiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/myrefferals.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/myrefferals.js"));
module.exports = __webpack_exports__;

})();