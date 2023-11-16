"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8842:
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
            const { formData  } = req.body;
            console.log(formData, "for, data herer");
            console.log(formData, "dfdfdf", token);
            var config = {
                method: "post",
                url: "http://airaicloud.com:6000/api/v1/image1/addadvertisement",
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
                data: formData
            };
            console.log("yes");
            const serverError = error.response.data.error;
            console.log(serverError);
            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {
                res.status(200).json({
                    data: response.data
                });
            });
        } catch (err) {
            // console.log(err);
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
var __webpack_exports__ = (__webpack_exec__(8842));
module.exports = __webpack_exports__;

})();