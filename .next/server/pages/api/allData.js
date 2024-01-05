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
exports.id = "pages/api/allData";
exports.ids = ["pages/api/allData"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/allData.js":
/*!******************************!*\
  !*** ./pages/api/allData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            const config = {\n                responseLimit: false,\n                timeout: 20000,\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/dont\",\n                headers: {\n                    Authorization: `Bearer ${token}`\n                },\n                data\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            // console.log(JSON.stringify(response.data));\n            res.status(200).json({\n                data: response.data\n            });\n        } catch (error) {\n            console.error(error);\n            if (error.response) {\n                res.status(error.response.status).json({\n                    error: error.response.data\n                });\n            } else if (error.request) {\n                res.status(504).json({\n                    error: \"Gateway Timeout: No response received from the server\"\n                });\n            } else {\n                res.status(500).json({\n                    error: error.message\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUV6QixNQUFNRSxNQUFNLEdBQUc7Z0JBQ2JDLGFBQWEsRUFBRSxLQUFLO2dCQUNwQkMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2ROLE1BQU0sRUFBRSxNQUFNO2dCQUNkTyxHQUFHLEVBQUUsOENBQThDO2dCQUNuREMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVSLEtBQUssQ0FBQyxDQUFDO2lCQUNqQztnQkFDREUsSUFBSTthQUNMO1lBRUQsTUFBTU8sUUFBUSxHQUFHLE1BQU1kLDRDQUFLLENBQUNRLE1BQU0sQ0FBQztZQUVwQyw4Q0FBOEM7WUFDOUNMLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVULElBQUksRUFBRU8sUUFBUSxDQUFDUCxJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQy9DLENBQUMsT0FBT1UsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztZQUVyQixJQUFJQSxLQUFLLENBQUNILFFBQVEsRUFBRTtnQkFDbEJYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDRSxLQUFLLENBQUNILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNILFFBQVEsQ0FBQ1AsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDeEUsTUFBTSxJQUFJVSxLQUFLLENBQUNFLE9BQU8sRUFBRTtnQkFDeEJoQixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsdURBQXVEO2lCQUFFLENBQUMsQ0FBQzthQUMxRixNQUFNO2dCQUNMZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0csT0FBTztpQkFBRSxDQUFDLENBQUM7YUFDaEQ7U0FDRjtLQUNGLE1BQU07UUFDTGpCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztLQUN2RDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL2FsbERhdGEuanM/NDU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcS5ib2R5O1xuXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHJlc3BvbnNlTGltaXQ6IGZhbHNlLFxuICAgICAgICB0aW1lb3V0OiAyMDAwMCwgLy8gU2V0IHRoZSB0aW1lb3V0IHRvIDIwIHNlY29uZHNcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9haXJhaWNsb3VkLmNvbTo2MDAwL2FwaS92MS9hZG1pbi9kb250JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oeyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgICAgICByZXMuc3RhdHVzKDUwNCkuanNvbih7IGVycm9yOiAnR2F0ZXdheSBUaW1lb3V0OiBObyByZXNwb25zZSByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXInIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJkYXRhIiwiY29uZmlnIiwicmVzcG9uc2VMaW1pdCIsInRpbWVvdXQiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/allData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allData.js"));
module.exports = __webpack_exports__;

})();