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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(token, \"to be sent to the API!\", data);\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            const config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getalluser\",\n                headers: {\n                    Authorization: `Bearer ${token}`\n                },\n                data\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            console.log(JSON.stringify(response.data));\n            res.status(200).json({\n                data: response.data\n            });\n        } catch (error) {\n            console.error(error);\n            if (error.response) {\n                res.status(error.response.status).json({\n                    error: error.response.data\n                });\n            } else if (error.request) {\n                res.status(500).json({\n                    error: \"No response received from the server\"\n                });\n            } else {\n                res.status(500).json({\n                    error: error.message\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXlyZWZmZXJhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzFCLDJCQUEyQjtBQUVaLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUVDLEtBQUssR0FBQyxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDekIsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1lBQ3ZCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxFQUFFLHdCQUF3QixFQUFDRSxJQUFJLENBQUMsQ0FBQztZQUVsRCxpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFFTixNQUFNRyxNQUFNLEdBQUc7Z0JBQ2JOLE1BQU0sRUFBRSxNQUFNO2dCQUNkTyxHQUFHLEVBQUUsb0RBQW9EO2dCQUN6REMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVSLEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFDREUsSUFBSTthQUVMO1lBRUQsTUFBTU8sUUFBUSxHQUFHLE1BQU1kLDRDQUFLLENBQUNVLE1BQU0sQ0FBQztZQUVwQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNNLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0NKLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVYLElBQUksRUFBRU8sUUFBUSxDQUFDUCxJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQy9DLENBQUMsT0FBT1ksS0FBSyxFQUFFO1lBQ2RYLE9BQU8sQ0FBQ1csS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztZQUVyQixJQUFJQSxLQUFLLENBQUNMLFFBQVEsRUFBRTtnQkFDbEJYLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDRSxLQUFLLENBQUNMLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNMLFFBQVEsQ0FBQ1AsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDeEUsTUFBTSxJQUFJWSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDeEJqQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsc0NBQXNDO2lCQUFFLENBQUMsQ0FBQzthQUN6RSxNQUFNO2dCQUNMaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNFLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7S0FDRixNQUFNO1FBQ0xsQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDdkQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9teXJlZmZlcmFscy5qcz9kMGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgaHR0cCBmcm9tICdodHRwJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdG9rZW59ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7ZGF0YX0gPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuLCAndG8gYmUgc2VudCB0byB0aGUgQVBJIScsZGF0YSk7XG5cbiAgICAgIC8vIGNvbnN0IGFnZW50ID0gbmV3IGh0dHAuQWdlbnQoe1xuICAgICAgLy8gICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi9nZXRhbGx1c2VyJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgICAgICAvLyBodHRwQWdlbnQ6IGFnZW50LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oeyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnTm8gcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInJlcXVlc3QiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/myrefferals.js\n");

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