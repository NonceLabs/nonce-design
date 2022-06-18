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
var react_native_1 = require("react-native");
var Themed_1 = require("../Themed");
var react_1 = require("react");
var useThemeContext_1 = require("../../hooks/useThemeContext");
function Button(_a) {
    var label = _a.label, onPress = _a.onPress, style = _a.style, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.primary, primary = _e === void 0 ? false : _e, _f = _a.full, full = _f === void 0 ? false : _f;
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    var istyles = theme[theme.active];
    var _type = primary ? 'primary' : type;
    var _size = full ? 'large' : size;
    var buttonStyle = istyles.button[_type];
    return (jsx_runtime_1.jsx(react_native_1.TouchableOpacity, __assign({ style: [
            styles.button,
            {
                backgroundColor: buttonStyle.backgroundColor,
                borderColor: buttonStyle.borderColor,
                width: full ? '100%' : 'auto',
            },
            style,
            { opacity: disabled ? 0.5 : 1 },
            buttonStyle.buttonSize[_size],
        ], onPress: onPress, disabled: disabled, activeOpacity: 0.9 }, { children: jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: [
                {
                    color: buttonStyle.color,
                },
                buttonStyle.ButtonTextSize[_size],
            ] }, { children: label }), void 0) }), void 0));
}
exports.default = Button;
var styles = react_native_1.StyleSheet.create({
    button: {
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
