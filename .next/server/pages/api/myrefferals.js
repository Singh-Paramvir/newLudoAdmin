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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(token, \"to be sent to the API!\", data);\n            const config = {\n                responseLimit: false,\n                timeout: 20000,\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getalluser\",\n                headers: {\n                    Authorization: `Bearer ${token}`\n                },\n                data\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            // console.log(JSON.stringify(response.data));\n            res.status(200).json({\n                data: response.data\n            });\n        } catch (error) {\n            console.error(error);\n            if (error.response) {\n                res.status(error.response.status).json({\n                    error: error.response.data\n                });\n            } else if (error.request) {\n                res.status(504).json({\n                    error: \"Gateway Timeout: No response received from the server\"\n                });\n            } else {\n                res.status(500).json({\n                    error: error.message\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXlyZWZmZXJhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtZQUMxQixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHTCxHQUFHLENBQUNJLElBQUk7WUFDekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLEVBQUUsd0JBQXdCLEVBQUVFLElBQUksQ0FBQyxDQUFDO1lBRW5ELE1BQU1HLE1BQU0sR0FBRztnQkFDYkMsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCQyxPQUFPLEVBQUUsS0FBSztnQkFDZFIsTUFBTSxFQUFFLE1BQU07Z0JBQ2RTLEdBQUcsRUFBRSxvREFBb0Q7Z0JBQ3pEQyxPQUFPLEVBQUU7b0JBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVYsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO2dCQUNERSxJQUFJO2FBQ0w7WUFFRCxNQUFNUyxRQUFRLEdBQUcsTUFBTWhCLDRDQUFLLENBQUNVLE1BQU0sQ0FBQztZQUVwQyw4Q0FBOEM7WUFDOUNQLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVYLElBQUksRUFBRVMsUUFBUSxDQUFDVCxJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQy9DLENBQUMsT0FBT1ksS0FBSyxFQUFFO1lBQ2RYLE9BQU8sQ0FBQ1csS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztZQUVyQixJQUFJQSxLQUFLLENBQUNILFFBQVEsRUFBRTtnQkFDbEJiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDRSxLQUFLLENBQUNILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNILFFBQVEsQ0FBQ1QsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDeEUsTUFBTSxJQUFJWSxLQUFLLENBQUNDLE9BQU8sRUFBRTtnQkFDeEJqQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsdURBQXVEO2lCQUFFLENBQUMsQ0FBQzthQUMxRixNQUFNO2dCQUNMaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNFLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7S0FDRixNQUFNO1FBQ0xsQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDdkQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9teXJlZmZlcmFscy5qcz9kMGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHRva2VuIH0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbiwgJ3RvIGJlIHNlbnQgdG8gdGhlIEFQSSEnLCBkYXRhKTtcblxuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICByZXNwb25zZUxpbWl0OiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogMjAwMDAsIC8vIFNldCB0aGUgdGltZW91dCB0byAyMCBzZWNvbmRzXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICdodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vZ2V0YWxsdXNlcicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoY29uZmlnKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDQpLmpzb24oeyBlcnJvcjogJ0dhdGV3YXkgVGltZW91dDogTm8gcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJyZXNwb25zZUxpbWl0IiwidGltZW91dCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/myrefferals.js\n");

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