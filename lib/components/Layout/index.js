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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useThemeContext_1 = require("../../hooks/useThemeContext");
var theme_1 = __importDefault(require("../../theme"));
function Layout(_a) {
    var children = _a.children, _b = _a.themeColor, themeColor = _b === void 0 ? 'light' : _b, theme = _a.theme;
    return (jsx_runtime_1.jsx(react_native_gesture_handler_1.GestureHandlerRootView, __assign({ style: { flex: 1 } }, { children: jsx_runtime_1.jsx(react_native_safe_area_context_1.SafeAreaProvider, { children: jsx_runtime_1.jsx(useThemeContext_1.ThemeContext.Provider, __assign({ value: __assign(__assign({}, theme_1.default), { active: themeColor }) }, { children: children }), void 0) }, void 0) }), void 0));
}
exports.default = Layout;
