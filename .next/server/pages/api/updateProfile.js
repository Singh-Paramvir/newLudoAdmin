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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import http from 'http';\n// import { getSession } from \"next-auth/react\";\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            const data = req.body;\n            // const agent = new http.Agent({\n            //   rejectUnauthorized: false,\n            // });\n            var config = {\n                method: \"post\",\n                url: \"http://airaicloud.com:6000/api/v1/admin/getslotes\",\n                headers: {\n                    \"Authorization\": `Bearer ${token}`\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLGdEQUFnRDtBQUVqQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDBDQUEwQztJQUMxQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUVILEdBQUcsQ0FBQ0ksSUFBSTtZQUN2QixNQUFNQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSTtZQUNyQixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLE1BQU07WUFDTixJQUFJRSxNQUFNLEdBQUc7Z0JBQ1hKLE1BQU0sRUFBRSxNQUFNO2dCQUNkSyxHQUFHLEVBQUUsbURBQW1EO2dCQUN4REMsT0FBTyxFQUFFO29CQUNMLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUwsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2FBQ0o7WUFDRCxNQUFNTCw0Q0FBSyxDQUFDUSxNQUFNLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osUUFBUSxDQUFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ0osR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRVgsSUFBSSxFQUFFSyxRQUFRLENBQUNMLElBQUk7aUJBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT1ksR0FBRyxFQUFFO1lBQ1pOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUMsQ0FBQztZQUNqQmhCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvdXBkYXRlUHJvZmlsZS5qcz9iZGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuLy8gaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHt0b2tlbn09IHJlcS5ib2R5O1xuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgICAgLy8gY29uc3QgYWdlbnQgPSBuZXcgaHR0cC5BZ2VudCh7XG4gICAgICAvLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAvLyB9KTtcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vYWlyYWljbG91ZC5jb206NjAwMC9hcGkvdjEvYWRtaW4vZ2V0c2xvdGVzXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGF9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJkYXRhIiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateProfile.js\n");

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