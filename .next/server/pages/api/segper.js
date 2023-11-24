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
exports.id = "pages/api/segper";
exports.ids = ["pages/api/segper"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/segper.js":
/*!*****************************!*\
  !*** ./pages/api/segper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getseg\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VncGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUMxQiwyQkFBMkI7QUFDWixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBQ0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3RCLE1BQU0sRUFBQ0MsSUFBSSxHQUFDLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUN2QixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFDTixJQUFJRSxNQUFNLEdBQUc7Z0JBQ1hKLE1BQU0sRUFBRSxNQUFNO2dCQUNkSyxHQUFHLEVBQUUsZ0RBQWdEO2dCQUNyREMsT0FBTyxFQUFDO29CQUNOLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUwsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2dCQUFDRSxJQUFJO2FBQ0w7WUFDRCxNQUFNUCw0Q0FBSyxDQUFDUSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osUUFBUSxDQUFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ0osR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRVgsSUFBSSxFQUFFSyxRQUFRLENBQUNMLElBQUk7aUJBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT1ksR0FBRyxFQUFFO1lBQ1pOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUMsQ0FBQztZQUNqQmhCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvc2VncGVyLmpzP2Q4MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7dG9rZW59PXJlcS5ib2R5XG4gICAgICBjb25zdCB7ZGF0YX0gPSByZXEuYm9keTtcbiAgICAgIC8vIGNvbnN0IGFnZW50ID0gbmV3IGh0dHAuQWdlbnQoe1xuICAgICAgLy8gICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgLy8gfSk7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cDovL2FpcmFpY2xvdWQuY29tOjYwMDAvYXBpL3YxL2FkbWluL2dldHNlZ1wiLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxkYXRhLCBcbiAgICAgIH07XG4gICAgICBhd2FpdCBheGlvcyhjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/segper.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/segper.js"));
module.exports = __webpack_exports__;

})();