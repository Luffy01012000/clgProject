"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_cookie_1 = require("react-cookie");
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_hot_toast_1 = require("react-hot-toast");
var login_reg_module_css_1 = require("./css/login-reg.module.css");
var react_2 = require("next-auth/react");
var fc_1 = require("react-icons/fc");
// interface FormProps {
//   onSubmit: (loginUserDetail:{username:string;
//     password:string}) => void;
// }
// const Login: React.FC<FormProps> = ({onSubmit}) => {
var Login = function () {
    //goggle
    var session = react_2.useSession();
    console.log(session);
    //Hooks *************---------------
    var router = navigation_1.useRouter();
    var _a = react_cookie_1.useCookies(["uid"]), cookies = _a[0], setCookie = _a[1], removeCookie = _a[2];
    var _b = react_1.useState("login"), toggler = _b[0], setToggler = _b[1];
    var _c = react_1.useState({
        username: "",
        password: ""
    }), loginUserDetail = _c[0], setLoginUserDetail = _c[1];
    var _d = react_1.useState({
        username: "",
        email: "",
        password: ""
    }), regUserDetail = _d[0], setRegUserDetail = _d[1];
    //Checking for password Strength
    var _e = react_1.useState({
        passNum: false,
        passUpp: false,
        passLow: false,
        spChar: false,
        minChar: false
    }), passStrength = _e[0], setPassStrength = _e[1];
    var checkPassIsStrong = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (true) {
                case passStrength.minChar === true:
                case passStrength.passLow === true:
                case passStrength.passNum === true:
                case passStrength.passUpp === true:
                case passStrength.spChar === true:
                    return [2 /*return*/, true];
                default:
                    return [2 /*return*/, undefined];
            }
            return [2 /*return*/];
        });
    }); };
    // Handling input fields-------------------**********
    var loginHandle = function (e) {
        var _a;
        setLoginUserDetail(__assign(__assign({}, loginUserDetail), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var regHandle = function (e) {
        var _a;
        setRegUserDetail(__assign(__assign({}, regUserDetail), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    react_1.useEffect(function () {
        var hasNumber = /\d/;
        var hasUpperCase = /[A-Z]/;
        var hasLowerCase = /[a-z]/;
        var hasSpChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var hasMinChar = regUserDetail.password.length > 8;
        var passNum = hasNumber.test(regUserDetail.password);
        var passUpp = hasUpperCase.test(regUserDetail.password);
        var passLow = hasLowerCase.test(regUserDetail.password);
        var spChar = hasSpChar.test(regUserDetail.password);
        setPassStrength({
            passNum: passNum,
            passUpp: passUpp,
            passLow: passLow,
            spChar: spChar,
            minChar: hasMinChar
        });
    }, [regUserDetail.password]);
    /* Login user ---------------------------------*/
    // const checkLogin = async (e:React.FormEvent<HTMLFormElement>)=>{
    //   e.preventDefault();
    //   onSubmit(loginUserDetail)
    // }
    var checkLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    react_hot_toast_1["default"].loading("Processing...");
                    return [4 /*yield*/, axios_1["default"]({
                            method: "post",
                            url: "http://localhost:8001/api/v1/users/login",
                            headers: {
                                "Content-Type": " application/json"
                            },
                            data: JSON.stringify(loginUserDetail)
                        })["catch"](function (err) { return console.log({ error: err }); })];
                case 2:
                    res = _a.sent();
                    // toast.promise(res, {
                    //   loading: "Processing...",
                    //   success: "Logged In Successfully!",
                    //   error: "Error when fetching",
                    // });
                    // console.log("res", ta);
                    // console.log("res.data:", res.data);
                    // setCookie("uid", res.data.data);
                    // if(ta){
                    // }
                    react_hot_toast_1["default"].dismiss();
                    setCookie("uid", res.data.data);
                    react_hot_toast_1["default"].success("Login Successfull!", {
                        duration: 4000
                    });
                    if (cookies.uid) {
                        router.push("/home");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log("error", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /*******************  registering user ********************/
    var regUser = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            e.preventDefault();
            // let tid=undefined;
            try {
                res = axios_1["default"]({
                    // const res = await axios({
                    method: "post",
                    url: "http://localhost:8001/api/v1/users/register",
                    data: regUserDetail,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                // .catch((err: any) => console.log(err));
                react_hot_toast_1["default"].promise(res, {
                    loading: "Loading...",
                    success: function (data) { return "Successfully Registered"; },
                    error: function (err) { return "This just happened: " + err.toString(); }
                }, {
                    style: {
                        minWidth: "150px"
                    },
                    success: {
                        duration: 5000,
                        icon: "🔥"
                    },
                    error: {
                        duration: 3000
                    },
                    id: "reg"
                });
            }
            catch (err) {
                // toast.dismiss(tid)
                // toast.error(err);
            }
            return [2 /*return*/];
        });
    }); };
    // toast.custom((t)=>(
    //   <div
    //     className={`${
    //       t.visible ? 'animate-enter' : 'animate-leave'
    //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    //   >
    //     <div className="flex-1 w-0 p-4">
    //       <div className="flex items-start">
    //         <div className="flex-shrink-0 pt-0.5">
    //           <img
    //             className="h-10 w-10 rounded-full"
    //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
    //             alt=""
    //           />
    //         </div>
    //         <div className="ml-3 flex-1">
    //           <p className="text-sm font-medium text-gray-900">
    //             Emilia Gates
    //           </p>
    //           <p className="mt-1 text-sm text-gray-500">
    //             Sure! 8:30pm works great!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex border-l border-gray-200">
    //       <button
    //         onClick={() => toast.dismiss(t.id)}
    //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       >
    //         Close
    //       </button>
    //     </div>
    //   </div>
    // ))
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { style: {
                width: "100%",
                height: "100vh",
                minHeight: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#111",
                fontFamily: "'roboto' sans-serif"
            } },
            react_1["default"].createElement(react_hot_toast_1.Toaster, { toastOptions: {
                    success: {
                        style: {
                            background: "green"
                        }
                    },
                    error: {
                        style: {
                            background: "red",
                            color: "#fff"
                        }
                    }
                } }),
            react_1["default"].createElement("div", { className: login_reg_module_css_1["default"].formParent, style: {
                    width: "850px",
                    height: "600px",
                    background: "#171717",
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)"
                } },
                react_1["default"].createElement("div", { className: login_reg_module_css_1["default"].signUpImg, style: {
                        position: "absolute",
                        width: "50%",
                        height: "100%",
                        background: "url(/img/download.png)",
                        backgroundSize: "cover"
                    } }),
                react_1["default"].createElement("div", { className: login_reg_module_css_1["default"].signInImg, style: {
                        position: "absolute",
                        width: "50%",
                        height: "100%",
                        left: "50%",
                        background: "url(/img/movieTheatre.jpg)",
                        backgroundSize: "cover"
                    } }),
                react_1["default"].createElement("div", { className: login_reg_module_css_1["default"].formContainer, style: toggler === "login"
                        ? {
                            position: "relative",
                            width: "50%",
                            minWidth: "300px",
                            height: "100%",
                            background: "#171717",
                            transition: "1s",
                            left: "0%",
                            display: "grid",
                            overflow: "hidden",
                            gridTemplateColumns: "repeat(2, calc(800px/2))"
                        }
                        : {
                            position: "relative",
                            width: "50%",
                            minWidth: "300px",
                            height: "100%",
                            background: "#171717",
                            transition: "1s",
                            left: "50%",
                            display: "grid",
                            overflow: "hidden",
                            gridTemplateColumns: "repeat(2, calc(800px/2))"
                        } },
                    react_1["default"].createElement("div", { className: "form", id: "sign-in-form", style: toggler === "login"
                            ? {
                                marginLeft: "-11%",
                                width: "100%",
                                height: "100%",
                                padding: "96px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                transition: "1s"
                            }
                            : {
                                marginLeft: "-150%",
                                width: "100%",
                                height: "100%",
                                padding: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                transition: "1s"
                            } },
                        react_1["default"].createElement("h1", { className: "title", style: {
                                width: "100%",
                                textAlign: "center",
                                fontSize: "60px",
                                fontWeight: "500",
                                textTransform: "capitalize",
                                color: "#fff"
                            } }, "sign in"),
                        react_1["default"].createElement("div", { className: "fields", style: {
                                position: "relative",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                textAlign: "center"
                            } },
                            react_1["default"].createElement("button", { className: "bg-white p-2 rounded-md flex justify-center", onClick: function () { return react_2.signIn("google"); } },
                                react_1["default"].createElement(fc_1.FcGoogle, { className: "text-lg" })),
                            react_1["default"].createElement("h2", { className: "text-white mt-2 mb-2 active:scale-95" }, "OR"),
                            react_1["default"].createElement("form", { onSubmit: checkLogin },
                                react_1["default"].createElement("input", { type: "text", className: "placeholder-[#3f3f3f]", style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "30px",
                                        padding: "5px 10px",
                                        // textTransform: "capitalize",
                                        border: "none",
                                        borderRadius: "5px",
                                        height: "30px",
                                        background: "#0d0d0d",
                                        color: "#fff"
                                    }, placeholder: "username", 
                                    // onChange={(e) =>
                                    //   setLoginUserDetail({
                                    //     ...loginUserDetail,
                                    //     username: e.target.value,
                                    //   })
                                    // }
                                    name: "username", value: loginUserDetail.username, onChange: loginHandle, required: true }),
                                react_1["default"].createElement("input", { type: "password", className: "placeholder-[#3f3f3f]", style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "30px",
                                        padding: "5px 10px",
                                        // textTransform: "capitalize",
                                        border: "none",
                                        borderRadius: "5px",
                                        height: "30px",
                                        background: "#0d0d0d",
                                        color: "#fff"
                                    }, placeholder: "password", name: "password", value: loginUserDetail.password, onChange: loginHandle, required: true }),
                                react_1["default"].createElement("div", { className: "submit-container", style: {
                                        position: "relative",
                                        width: "100%"
                                    } },
                                    react_1["default"].createElement("button", { type: "submit", className: "btn text-[#3f3f3f] hover:bg-[#000] hover:text-white active:scale-95 ", style: {
                                            // color: "#fff",
                                            background: "#0d0d0d",
                                            border: "none",
                                            padding: "10px 40px",
                                            fontSize: "15px",
                                            textTransform: "capitalize",
                                            display: "block",
                                            margin: "auto",
                                            // color: "#3f3f3f",
                                            cursor: "pointer",
                                            borderRadius: "10px",
                                            marginBottom: "20px",
                                            transition: ".5s"
                                        } }, "sign in"),
                                    react_1["default"].createElement("p", { className: "link text-[#3f3f3f] hover:text-white", style: {
                                            textAlign: "center",
                                            // color: "#3f3f3f",
                                            textTransform: "capitalize",
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            transition: ".5s"
                                        }, onClick: function () { return setToggler("register"); } }, "new here ? sign up here"))))),
                    react_1["default"].createElement("div", { className: "form", id: "sign-up-form", style: toggler === "login"
                            ? {
                                width: "100%",
                                height: "100%",
                                padding: "40px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                transition: "1s",
                                marginLeft: "50%"
                            }
                            : {
                                width: "100%",
                                height: "100%",
                                padding: "0px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                transition: "1s",
                                marginLeft: "-100%"
                            } },
                        react_1["default"].createElement("h1", { className: "title", style: {
                                marginBottom: "30px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "60px",
                                fontWeight: "500",
                                textTransform: "capitalize",
                                color: "#fff"
                            } }, "sign up"),
                        react_1["default"].createElement("div", { className: "fields", style: {
                                position: "relative",
                                width: "100%"
                            } },
                            react_1["default"].createElement("form", { onSubmit: regUser },
                                react_1["default"].createElement("input", { type: "text", className: "placeholder-[#3f3f3f]", style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "30px",
                                        padding: "5px 10px",
                                        // textTransform: "capitalize",
                                        border: "none",
                                        borderRadius: "5px",
                                        height: "30px",
                                        background: "#0d0d0d",
                                        color: "#fff"
                                    }, placeholder: "username", onChange: function (e) {
                                        return setRegUserDetail(__assign(__assign({}, regUserDetail), { username: e.target.value }));
                                    }, required: true }),
                                react_1["default"].createElement("input", { type: "email", className: "placeholder-[#3f3f3f]", style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "30px",
                                        padding: "5px 10px",
                                        // textTransform: "capitalize",
                                        border: "none",
                                        borderRadius: "5px",
                                        height: "30px",
                                        background: "#0d0d0d",
                                        color: "#fff"
                                    }, placeholder: "email", onChange: function (e) {
                                        return setRegUserDetail(__assign(__assign({}, regUserDetail), { email: e.target.value }));
                                    }, required: true }),
                                react_1["default"].createElement("input", { type: "password", className: "placeholder-[#3f3f3f]", style: {
                                        display: "block",
                                        width: "100%",
                                        marginBottom: "30px",
                                        padding: "5px 10px",
                                        // textTransform: "capitalize",
                                        border: "none",
                                        borderRadius: "5px",
                                        height: "30px",
                                        background: "#0d0d0d",
                                        color: "#fff"
                                    }, placeholder: "password", onChange: function (e) {
                                        return setRegUserDetail(__assign(__assign({}, regUserDetail), { password: e.target.value }));
                                    }, required: true }),
                                react_1["default"].createElement("div", { className: "passValidation  text-center font-semibold" },
                                    react_1["default"].createElement("p", { className: passStrength.minChar
                                            ? "text-[#8ad86bee]"
                                            : "text-[#3f3f3f]" }, "Min 8 Character"),
                                    react_1["default"].createElement("p", { className: passStrength.passUpp
                                            ? "text-[#8ad86bee]"
                                            : "text-[#3f3f3f]" }, "At least one Upper Case"),
                                    react_1["default"].createElement("p", { className: passStrength.passLow
                                            ? "text-[#8ad86bee]"
                                            : "text-[#3f3f3f]" }, "At least one Lower Case"),
                                    react_1["default"].createElement("p", { className: passStrength.spChar
                                            ? "text-[#8ad86bee]"
                                            : "text-[#3f3f3f]" }, "At least one Specail Char"),
                                    react_1["default"].createElement("p", { className: passStrength.passNum
                                            ? "text-[#8ad86bee]"
                                            : "text-[#3f3f3f]" }, "At least one Numberic value")),
                                react_1["default"].createElement("div", { className: "submit-container", style: {
                                        position: "relative",
                                        width: "100%"
                                    } },
                                    react_1["default"].createElement("button", { type: "submit", className: "btn text-[#3f3f3f] hover:bg-[#000] hover:text-white active:scale-95", style: {
                                            // color: "#fff",
                                            background: "#0d0d0d",
                                            border: "none",
                                            padding: "10px 40px",
                                            fontSize: "15px",
                                            textTransform: "capitalize",
                                            display: "block",
                                            margin: "auto",
                                            // color: "#3f3f3f",
                                            cursor: "pointer",
                                            borderRadius: "10px",
                                            marginBottom: "20px",
                                            transition: ".5s"
                                        } }, "sign up"),
                                    react_1["default"].createElement("p", { className: "link text-[#3f3f3f] hover:text-white", style: {
                                            textAlign: "center",
                                            // color: "#3f3f3f",
                                            textTransform: "capitalize",
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                            transition: ".5s"
                                        }, onClick: function () { return setToggler("login"); } }, "already have an account ? sign in here"))))))))));
};
exports["default"] = Login;
