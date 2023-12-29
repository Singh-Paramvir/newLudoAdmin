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
exports.id = "pages/api/updateadddata";
exports.ids = ["pages/api/updateadddata"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/updateadddata.js":
/*!************************************!*\
  !*** ./pages/api/updateadddata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // const {data} = req.body;\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(data, \"to be send to api tp\");\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/ued\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                // console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlYWRkZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsMkJBQTJCO1lBQzNCLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUNILEdBQUcsQ0FBQ0ksSUFBSTtZQUN0QixNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHTCxHQUFHLENBQUNJLElBQUk7WUFDdkJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUMxQyxJQUFJRyxNQUFNLEdBQUc7Z0JBQ1hOLE1BQU0sRUFBRSxNQUFNO2dCQUNkTyxHQUFHLEVBQUUsNkNBQTZDO2dCQUNsREMsT0FBTyxFQUFDO29CQUNOLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRVAsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2dCQUFDRSxJQUFJO2FBQ0w7WUFDRCxNQUFNUCw0Q0FBSyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDNUMsOENBQThDO2dCQUM3Q1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRVQsSUFBSSxFQUFFTyxRQUFRLENBQUNQLElBQUk7aUJBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT1UsR0FBRyxFQUFFO1lBQ1pULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxHQUFHLENBQUMsQ0FBQztZQUNqQmQsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS91cGRhdGVhZGRkYXRhLmpzPzljZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCB7ZGF0YX0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IHt0b2tlbn09cmVxLmJvZHlcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJ0byBiZSBzZW5kIHRvIGFwaSB0cFwiKTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vdWVkXCIsXG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LGRhdGEsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9rZW4iLCJib2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateadddata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateadddata.js"));
module.exports = __webpack_exports__;

})();