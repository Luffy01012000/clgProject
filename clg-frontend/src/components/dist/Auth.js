"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("next-auth/react");
var Auth = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_2.SessionProvider, null, children));
};
exports["default"] = Auth;
