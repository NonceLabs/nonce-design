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
var Themed_1 = require("../Themed");
var useThemeContext_1 = require("../../hooks/useThemeContext");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = __importDefault(require("../../theme/Styles"));
var padding = {
    none: 0,
    small: 5,
    medium: 10,
    large: 15,
};
function Box(_a) {
    var children = _a.children, backgroundColor = _a.backgroundColor, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.direction, direction = _c === void 0 ? 'row' : _c, _d = _a.align, align = _d === void 0 ? 'center' : _d, justify = _a.justify, _e = _a.gap, gap = _e === void 0 ? 'none' : _e, _f = _a.margin, margin = _f === void 0 ? 'none' : _f, _g = _a.border, border = _g === void 0 ? false : _g, _h = _a.pad, pad = _h === void 0 ? 'none' : _h, _j = _a.full, full = _j === void 0 ? false : _j;
    var _children = [];
    if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            _children.push(children[i]);
            if (gap !== 'none' && i < children.length - 1) {
                _children.push(jsx_runtime_1.jsx(Themed_1.View, { style: styles[gap] }, i));
            }
        }
    }
    else {
        _children.push(children);
    }
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    return (jsx_runtime_1.jsx(Themed_1.View, __assign({ style: [
            Styles_1.default.row,
            {
                flexDirection: direction,
                alignItems: align,
                justifyContent: justify,
                backgroundColor: backgroundColor,
            },
            style,
            border && { borderColor: theme.light.borderColor, borderWidth: 1 },
            {
                padding: padding[pad],
                width: full ? '100%' : undefined,
                margin: padding[margin],
            },
        ] }, { children: _children }), void 0));
}
exports.default = Box;
var styles = react_native_1.StyleSheet.create({
    small: {
        width: 8,
        height: 8,
    },
    medium: {
        width: 16,
        height: 16,
    },
    large: {
        width: 24,
        height: 24,
    },
    xlarge: {
        width: 32,
        height: 32,
    },
    xxlarge: {
        height: 50,
        width: 50,
    },
});
