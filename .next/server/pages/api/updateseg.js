"use strict";
(() => {
var exports = {};
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { token  } = req.body;
            const { data  } = req.body;
            console.log(data, "to be send to api tp!!!!`1`1`11");
            var config = {
                method: "post",
                url: "http://airaicloud.com:6000/api/v1/admin/updateseg",
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
var __webpack_exports__ = (__webpack_exec__(826));
module.exports = __webpack_exports__;

})();