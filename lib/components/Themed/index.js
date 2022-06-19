"use strict";
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
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
const useThemeContext_1 = require("../../hooks/useThemeContext");
const react_1 = require("react");
const react_native_1 = require("react-native");
function Text(props) {
    const { style, lightColor, darkColor } = props, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    const colors = theme[theme.active];
    return <react_native_1.Text style={[{ color: colors.text }, style]} {...otherProps}/>;
}
exports.Text = Text;
function View(props) {
    const { style, lightColor, darkColor } = props, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    return <react_native_1.View style={[{}, style]} {...otherProps}/>;
}
exports.View = View;
