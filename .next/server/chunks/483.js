"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 2888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Login = ()=>{
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // this route helps us to going next page
    async function login(data) {
        console.log(data, "from send");
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("api/login", data);
            const response = res.data;
            console.log(response.data.data, "response data!!!!!!!");
            // console.log(response.data.data.xx.data, "to check the token for storage")
            localStorage.setItem("token", response.data.data);
            notify("User Login Successfully");
            setTimeout(()=>{
                router.push("/dashboard"); // here we are going to next page
            }, 1000);
        } catch (err) {
            notifyError("Please Check Email or Password");
            console.log(err);
        }
    }
    function onSubmitHandler(event) {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const data = {
            email,
            password
        };
        console.log(data, "data here");
        login(data);
    }
    const notify = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(msg, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    const notifyError = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(msg, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                class: "profile-sec pb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                                position: "top-right",
                                autoClose: 6000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                pauseOnFocusLoss: true,
                                draggable: true,
                                pauseOnHover: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                class: "input-sec",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "line profile-line"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        class: "heading-text pink-text mt-2",
                                        children: " LOGIN ADMIN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "name-sec",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "item-text",
                                                    children: "EMAIL"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ref: emailRef,
                                                    className: "textinput",
                                                    type: "email",
                                                    name: "username",
                                                    placeholder: "Enter your Email",
                                                    required: true
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "item-text",
                                                children: "PASSWORD"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ref: passwordRef,
                                                className: "textinput",
                                                type: "password",
                                                name: "last-name",
                                                placeholder: "Enter your Password",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "funds-page.html",
                                        class: "btn btn-round btn-warning w-100 ",
                                        style: {
                                            marginTop: "126px",
                                            marginBottom: "20px"
                                        },
                                        type: "button",
                                        onClick: onSubmitHandler,
                                        children: "CONTINUE"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "para-text",
                                        children: [
                                            "Forgot Password?",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    fontWeight: "600"
                                                },
                                                children: "FORGOT"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "js/bootstrap.bundle.js"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;