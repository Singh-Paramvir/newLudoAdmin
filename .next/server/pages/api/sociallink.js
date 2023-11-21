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
exports.id = "pages/api/sociallink";
exports.ids = ["pages/api/sociallink"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/sociallink.js":
/*!*********************************!*\
  !*** ./pages/api/sociallink.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data1  } = req.body;\n            console.log(data1, \"data 1\");\n            const data = {\n                buttonValue: data1.buttonValue\n            };\n            console.log(data, \"data\");\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getsocial\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29jaWFsbGluay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDMUIsMkJBQTJCO0FBRVosZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QywwQ0FBMEM7SUFDMUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDeEIsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBR0wsR0FBRyxDQUFDSSxJQUFJO1lBQ3hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLE1BQU1HLElBQUksR0FBRztnQkFBRUMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7YUFBRTtZQUNyREgsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwQixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFDTixJQUFJRSxNQUFNLEdBQUc7Z0JBQ1hSLE1BQU0sRUFBRSxNQUFNO2dCQUNkUyxHQUFHLEVBQUUsbURBQW1EO2dCQUN4REMsT0FBTyxFQUFFO29CQUNQLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRVQsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2dCQUFDSyxJQUFJO2FBQ1A7WUFDRCxNQUFNViw0Q0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ1AsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVWLElBQUksRUFBRU0sUUFBUSxDQUFDTixJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9XLEdBQUcsRUFBRTtZQUNaYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDLENBQUM7WUFDakJsQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9zb2NpYWxsaW5rLmpzP2MzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7dG9rZW59ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCB7ZGF0YTF9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhMSxcImRhdGEgMVwiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGJ1dHRvblZhbHVlOiBkYXRhMS5idXR0b25WYWx1ZSB9O1xuY29uc29sZS5sb2coZGF0YSwgXCJkYXRhXCIpO1xuICAgICAgLy8gY29uc3QgYWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7XG4gICAgICAvLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAvLyB9KTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vZ2V0c29jaWFsXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0sZGF0YSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBheGlvcyhjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGExIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJidXR0b25WYWx1ZSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sociallink.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sociallink.js"));
module.exports = __webpack_exports__;

})();