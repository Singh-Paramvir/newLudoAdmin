"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// import http from 'http';
async function handler(req, res) {
    // const session = await getSession({req})
    if (req.method === "POST") {
        try {
            const { token  } = req.body;
            const { data1  } = req.body;
            console.log(data1, "data 1");
            const data = {
                buttonValue: data1.buttonValue
            };
            console.log(data, "data");
            // const agent = new http.Agent({
            //   rejectUnauthorized: false,
            // });
            var config = {
                method: "post",
                url: "http://airaicloud.com:6000/api/v1/admin/getsocial",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data
            };
            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {
                console.log(JSON.stringify(response.data));
                res.status(200).json({
                    data: response.data
                });
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                Error: err
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1179));
module.exports = __webpack_exports__;

})();