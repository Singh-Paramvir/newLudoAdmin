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
exports.id = "pages/api/getapproverequest";
exports.ids = ["pages/api/getapproverequest"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/getapproverequest.js":
/*!****************************************!*\
  !*** ./pages/api/getapproverequest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const { data  } = req.body;\n            console.log(data, \"to be send to api tp!!!!\");\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getapproverequest\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YXBwcm92ZXJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUNILEdBQUcsQ0FBQ0ksSUFBSTtZQUN0QixNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHTCxHQUFHLENBQUNJLElBQUk7WUFDdkJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUM5QyxJQUFJRyxNQUFNLEdBQUc7Z0JBQ1hOLE1BQU0sRUFBRSxNQUFNO2dCQUNkTyxHQUFHLEVBQUUsMkRBQTJEO2dCQUNoRUMsT0FBTyxFQUFDO29CQUNOLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRVAsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2dCQUFDRSxJQUFJO2FBQ0w7WUFDRCxNQUFNUCw0Q0FBSyxDQUFDVSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDUCxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ0osR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRVgsSUFBSSxFQUFFTyxRQUFRLENBQUNQLElBQUk7aUJBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT1ksR0FBRyxFQUFFO1lBQ1pYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxHQUFHLENBQUMsQ0FBQztZQUNqQmhCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvZ2V0YXBwcm92ZXJlcXVlc3QuanM/ZTYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHt0b2tlbn09cmVxLmJvZHlcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJ0byBiZSBzZW5kIHRvIGFwaSB0cCEhISFcIik7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiaHR0cDovL2FpcmFpY2xvdWQuY29tOjYwMDAvYXBpL3YxL2FkbWluL2dldGFwcHJvdmVyZXF1ZXN0XCIsXG4gICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LGRhdGEsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YX0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getapproverequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getapproverequest.js"));
module.exports = __webpack_exports__;

})();