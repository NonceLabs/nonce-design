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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
var useThemeContext_1 = require("../../hooks/useThemeContext");
var react_1 = require("react");
var react_native_1 = require("react-native");
function Text(props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    var colors = theme[theme.active];
    return jsx_runtime_1.jsx(react_native_1.Text, __assign({ style: [{ color: colors.text }, style] }, otherProps), void 0);
}
exports.Text = Text;
function View(props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    return jsx_runtime_1.jsx(react_native_1.View, __assign({ style: [{}, style] }, otherProps), void 0);
}
exports.View = View;
