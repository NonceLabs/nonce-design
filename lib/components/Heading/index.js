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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Themed_1 = require("../Themed");
var react_1 = require("react");
var react_native_1 = require("react-native");
var useThemeContext_1 = require("../../hooks/useThemeContext");
function Heading(_a) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    var headingStyle = theme[theme.active].heading;
    return (jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: [styles.h, headingStyle[level - 1], style] }, { children: children }), void 0));
}
exports.default = Heading;
var styles = react_native_1.StyleSheet.create({
    h: {
        fontWeight: '600',
    },
});
