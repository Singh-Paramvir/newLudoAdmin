"use strict";
(() => {
var exports = {};
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// import http from 'http';
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { token  } = req.body;
            const { data  } = req.body;
            console.log(token, "to be sent to the API!", data);
            // const agent = new http.Agent({
            //   rejectUnauthorized: false,
            // });
            const config = {
                method: "post",
                url: "http://airaicloud.com:6000/api/v1/admin/getalluser",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
            console.log(JSON.stringify(response.data));
            res.status(200).json({
                data: response.data
            });
        } catch (error) {
            console.error(error);
            if (error.response) {
                res.status(error.response.status).json({
                    error: error.response.data
                });
            } else if (error.request) {
                res.status(500).json({
                    error: "No response received from the server"
                });
            } else {
                res.status(500).json({
                    error: error.message
                });
            }
        }
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8476));
module.exports = __webpack_exports__;

})();