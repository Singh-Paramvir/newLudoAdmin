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
exports.id = "pages/api/updateProfile";
exports.ids = ["pages/api/updateProfile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/updateProfile.js":
/*!************************************!*\
  !*** ./pages/api/updateProfile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\n// import { getSession } from \"next-auth/react\";\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            console.log(data, \"data \");\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getslotes\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGdEQUFnRDtBQUVqQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDBDQUEwQztJQUMxQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUVILEdBQUcsQ0FBQ0ksSUFBSTtZQUN2QixNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHTCxHQUFHLENBQUNJLElBQUk7WUFDdkIsaUNBQWlDO1lBQ2pDLCtCQUErQjtZQUMvQixNQUFNO1lBQ05FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSUcsTUFBTSxHQUFHO2dCQUNYTixNQUFNLEVBQUUsTUFBTTtnQkFDZE8sR0FBRyxFQUFFLG1EQUFtRDtnQkFDeERDLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUVQLEtBQUssQ0FBQyxDQUFDO2lCQUNuQztnQkFBQ0UsSUFBSTthQUNUO1lBQ0QsTUFBTVAsNENBQUssQ0FBQ1UsTUFBTSxDQUFDLENBQUNHLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NKLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVYLElBQUksRUFBRU8sUUFBUSxDQUFDUCxJQUFJO2lCQUFDLENBQUMsQ0FBQzthQUM5QyxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9ZLEdBQUcsRUFBRTtZQUNaWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLENBQUM7WUFDakJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvYXBpL3VwZGF0ZVByb2ZpbGUuanM/YmRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbi8vIGltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7dG9rZW59PSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5O1xuICAgICAgLy8gY29uc3QgYWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7XG4gICAgICAvLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAvLyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJkYXRhIFwiKTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vZ2V0c2xvdGVzXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICB9LGRhdGEsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateProfile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateProfile.js"));
module.exports = __webpack_exports__;

})();