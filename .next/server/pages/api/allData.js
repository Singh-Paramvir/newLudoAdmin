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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(token, \"to be sent to the API!\", data);\n            const config = {\n                responseLimit: false,\n                timeout: 20000,\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/dont\",\n                headers: {\n                    Authorization: `Bearer ${token}`\n                },\n                data\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);\n            // console.log(JSON.stringify(response.data));\n            res.status(200).json({\n                data: response.data\n            });\n        } catch (error) {\n            console.error(error);\n            if (error.response) {\n                res.status(error.response.status).json({\n                    error: error.response.data\n                });\n            } else if (error.request) {\n                res.status(504).json({\n                    error: \"Gateway Timeout: No response received from the server\"\n                });\n            } else {\n                res.status(500).json({\n                    error: error.message\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQzFCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUN6QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssRUFBRSx3QkFBd0IsRUFBRUUsSUFBSSxDQUFDLENBQUM7WUFFbkQsTUFBTUcsTUFBTSxHQUFHO2dCQUNiQyxhQUFhLEVBQUUsS0FBSztnQkFDcEJDLE9BQU8sRUFBRSxLQUFLO2dCQUNkUixNQUFNLEVBQUUsTUFBTTtnQkFDZFMsR0FBRyxFQUFFLDhDQUE4QztnQkFDbkRDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFVixLQUFLLENBQUMsQ0FBQztpQkFDakM7Z0JBQ0RFLElBQUk7YUFDTDtZQUVELE1BQU1TLFFBQVEsR0FBRyxNQUFNaEIsNENBQUssQ0FBQ1UsTUFBTSxDQUFDO1lBRXBDLDhDQUE4QztZQUM5Q1AsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVgsSUFBSSxFQUFFUyxRQUFRLENBQUNULElBQUk7YUFBRSxDQUFDLENBQUM7U0FDL0MsQ0FBQyxPQUFPWSxLQUFLLEVBQUU7WUFDZFgsT0FBTyxDQUFDVyxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1lBRXJCLElBQUlBLEtBQUssQ0FBQ0gsUUFBUSxFQUFFO2dCQUNsQmIsR0FBRyxDQUFDYyxNQUFNLENBQUNFLEtBQUssQ0FBQ0gsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0gsUUFBUSxDQUFDVCxJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUN4RSxNQUFNLElBQUlZLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2dCQUN4QmpCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSx1REFBdUQ7aUJBQUUsQ0FBQyxDQUFDO2FBQzFGLE1BQU07Z0JBQ0xoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0UsT0FBTztpQkFBRSxDQUFDLENBQUM7YUFDaEQ7U0FDRjtLQUNGLE1BQU07UUFDTGxCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztLQUN2RDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL2FsbERhdGEuanM/NDU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc29sZS5sb2codG9rZW4sICd0byBiZSBzZW50IHRvIHRoZSBBUEkhJywgZGF0YSk7XG5cbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgcmVzcG9uc2VMaW1pdDogZmFsc2UsXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAwLCAvLyBTZXQgdGhlIHRpbWVvdXQgdG8gMjAgc2Vjb25kc1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2FpcmFpY2xvdWQuY29tOjYwMDAvYXBpL3YxL2FkbWluL2RvbnQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbih7IGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhIH0pO1xuICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTA0KS5qc29uKHsgZXJyb3I6ICdHYXRld2F5IFRpbWVvdXQ6IE5vIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlcicgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwicmVzcG9uc2VMaW1pdCIsInRpbWVvdXQiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVxdWVzdCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/allData.js\n");

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