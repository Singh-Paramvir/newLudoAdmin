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
exports.id = "pages/api/gpw";
exports.ids = ["pages/api/gpw"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/gpw.js":
/*!**************************!*\
  !*** ./pages/api/gpw.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            console.log(data, \"fgfgfgfgg\");\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getpendingwithdraw\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                //console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3B3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUMxQiwyQkFBMkI7QUFDWixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBQ0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3RCLE1BQU0sRUFBQ0MsSUFBSSxHQUFDLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUN2QixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksRUFBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixJQUFJRyxNQUFNLEdBQUc7Z0JBQ1hOLE1BQU0sRUFBRSxNQUFNO2dCQUNkTyxHQUFHLEVBQUUsNERBQTREO2dCQUNqRUMsT0FBTyxFQUFDO29CQUNOLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRVAsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2dCQUFDRSxJQUFJO2FBQ0w7WUFDRCxNQUFNUCw0Q0FBSyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0MsNkNBQTZDO2dCQUM3Q1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRVQsSUFBSSxFQUFFTyxRQUFRLENBQUNQLElBQUk7aUJBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT1UsR0FBRyxFQUFFO1lBQ1pULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxHQUFHLENBQUMsQ0FBQztZQUNqQmQsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2x1ZG9hZG1pbi8uL3BhZ2VzL2FwaS9ncHcuanM/OTFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHt0b2tlbn09cmVxLmJvZHlcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5O1xuICAgICAgLy8gY29uc3QgYWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7XG4gICAgICAvLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAvLyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsXCJmZ2ZnZmdmZ2dcIik7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cDovL2FpcmFpY2xvdWQuY29tOjYwMDAvYXBpL3YxL2FkbWluL2dldHBlbmRpbmd3aXRoZHJhd1wiLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxkYXRhLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/gpw.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gpw.js"));
module.exports = __webpack_exports__;

})();