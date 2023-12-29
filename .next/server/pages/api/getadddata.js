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
exports.id = "pages/api/getadddata";
exports.ids = ["pages/api/getadddata"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/getadddata.js":
/*!*********************************!*\
  !*** ./pages/api/getadddata.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data1  } = req.body;\n            console.log(data1, \"data 1\");\n            const data = {\n                buttonValue: data1.buttonValue\n            };\n            console.log(data, \"data\");\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getadddata\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YWRkZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDMUIsMkJBQTJCO0FBRVosZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QywwQ0FBMEM7SUFDMUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDeEIsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1lBQ3hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLE1BQU1HLElBQUksR0FBRztnQkFBRUMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7YUFBRTtZQUNyREgsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwQixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFDTixJQUFJRSxNQUFNLEdBQUc7Z0JBQ1hSLE1BQU0sRUFBRSxNQUFNO2dCQUNkUyxHQUFHLEVBQUUsb0RBQW9EO2dCQUN6REMsT0FBTyxFQUFFO29CQUNQLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRVQsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2dCQUFDSyxJQUFJO2FBQ1A7WUFDRCxNQUFNViw0Q0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ1AsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVWLElBQUksRUFBRU0sUUFBUSxDQUFDTixJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9XLEdBQUcsRUFBRTtZQUNaYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDLENBQUM7WUFDakJsQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9nZXRhZGRkYXRhLmpzPzA1MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7dG9rZW59ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7ZGF0YTF9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhMSxcImRhdGEgMVwiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGJ1dHRvblZhbHVlOiBkYXRhMS5idXR0b25WYWx1ZSB9O1xuY29uc29sZS5sb2coZGF0YSwgXCJkYXRhXCIpO1xuICAgICAgLy8gY29uc3QgYWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7XG4gICAgICAvLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAvLyB9KTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vZ2V0YWRkZGF0YVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9LGRhdGEsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJkYXRhMSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYnV0dG9uVmFsdWUiLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getadddata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getadddata.js"));
module.exports = __webpack_exports__;

})();