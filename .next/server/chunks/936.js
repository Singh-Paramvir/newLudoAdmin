exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 6936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6119);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









let moon;
let id;
const MyRefferal = ()=>{
    const firstRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const firstRef1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: selectedUserId , 1: setSelectedUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: referrals , 1: setReferrals  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Initialize as an empty array
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [modalOpen, setModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    async function myReferrals() {
        try {
            let buttonValue = localStorage.getItem("buttonValue");
            const data = {
                buttonValue
            };
            const token = localStorage.getItem("token");
            let res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/gpw", {
                token: token,
                data
            });
            const response = res.data;
            console.log(response.data, "to get the data from api");
            setReferrals(response.data.data); // Update to access data property correctly
        } catch (err) {
            console.log(err);
        }
    }
    // model 
    async function apiFunction(e) {
        try {
            setModalOpen(!modalOpen);
            moon = e;
            console.log(moon, "userId");
        } catch (err) {
            console.log(err, "api error here");
        }
    }
    // approve request
    async function apiFunction1(e) {
        try {
            //setModalOpen(!modalOpen)
            id = e;
            console.log(id, "userId");
            const data = {
                id
            };
            console.log(data, "moon hererererererere ");
            const token = localStorage.getItem("token");
            let res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/approverequest", {
                token: token,
                data
            });
            const response = res.data;
            console.log(response, "response data");
            //notify("Data Updated Successfully");
            setTimeout(()=>{
                window.location.reload();
            }, 1000);
        } catch (err) {
            console.log(err, "api error here");
        }
    }
    // delete user handler
    const handleAddChips3 = async (e)=>{
        try {
            const data = {
                id: moon
            };
            console.log(data, "moon hererererererere ");
            const token = localStorage.getItem("token");
            // api call
            let res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/deleterequest", {
                token: token,
                data
            });
            const response = res.data;
            console.log(response, "response data");
            // Close the modal
            setModalOpen(false);
            console.log("model closed");
            // Refresh the page after showing the toast message
            setTimeout(()=>{
                window.location.reload();
            }, 1000);
        } catch (e1) {
            console.log(e1);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        myReferrals();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, {
                toggle: ()=>setdeleteModelOpen(!modalOpen)
                ,
                isOpen: modalOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-header d-flex justify-content-between align-items-center m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "modal-title",
                                children: "Do You Want To Delete Request"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "aria-label": "Close",
                                className: "close",
                                type: "button",
                                onClick: ()=>setModalOpen(!modalOpen)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": true,
                                    children: "\xd7"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                color: "secondary",
                                type: "button",
                                onClick: ()=>setModalOpen(!modalOpen)
                                ,
                                children: "Close"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                color: "primary",
                                type: "button",
                                onClick: handleAddChips3,
                                children: "Save Changes"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "profile-sec",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "input-sec",
                            id: "ref-code",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "heading-text pink-text mt-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "arrows-icon",
                                            id: "left-rfset",
                                            style: {
                                                position: "relative",
                                                left: "-44%",
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: _public_arrow_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src,
                                                onClick: ()=>router.back()
                                            })
                                        }),
                                        "Request"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "table funds-table mt-3",
                                    id: "funds-color",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "Sr. No."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "MobileNumber"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "PaymentMethod"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "TotalAmont"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "TransactionId"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "Payableamount"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "Reject Payment"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        id: "fuds",
                                                        scope: "col",
                                                        children: "Approve Payment"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: referrals.length > 0 ? referrals.map((referral, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: index + 1
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.firstName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.mobileNumber
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.paymentMethod
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.totalAmount
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.transactionId
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: referral.totalAmount - referral.money
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                color: "danger" // Use the danger color for the "Cut Chips" button
                                                                ,
                                                                type: "button",
                                                                onClick: ()=>apiFunction(referral.id)
                                                                ,
                                                                children: "Reject"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                color: "success" // Use the danger color for the "Cut Chips" button
                                                                ,
                                                                type: "button",
                                                                onClick: ()=>apiFunction1(referral.id)
                                                                ,
                                                                children: "Approve"
                                                            })
                                                        })
                                                    ]
                                                }, referral._id)
                                            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    colSpan: "4",
                                                    children: "No data found"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyRefferal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;