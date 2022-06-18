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
var iconoir_react_native_1 = require("iconoir-react-native");
var react_native_1 = require("react-native");
var Themed_1 = require("../Themed");
var Styles_1 = __importDefault(require("../../theme/Styles"));
var react_1 = require("react");
var useThemeContext_1 = require("../../hooks/useThemeContext");
function SettingBlock(_a) {
    var title = _a.title, items = _a.items;
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    var colors = theme[theme.active];
    return (jsx_runtime_1.jsxs(Themed_1.View, __assign({ style: { width: '100%' } }, { children: [!!title && jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: styles.blockTitle }, { children: title }), void 0), jsx_runtime_1.jsx(Themed_1.View, __assign({ style: [
                    styles.blockWrap,
                    {
                        backgroundColor: colors.cardBackground,
                    },
                ] }, { children: items.map(function (item, idx) {
                    var noBorder = idx === items.length - 1;
                    return (jsx_runtime_1.jsxs(react_native_1.Pressable, __assign({ style: [
                            styles.rowWrap,
                            {
                                borderBottomWidth: noBorder ? 0 : react_native_1.StyleSheet.hairlineWidth,
                                borderBottomColor: colors.borderColor,
                            },
                        ], onPress: item.onPress }, { children: [jsx_runtime_1.jsxs(Themed_1.View, __assign({ style: Styles_1.default.row }, { children: [item.icon, jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: styles.key }, { children: item.title }), void 0)] }), void 0), jsx_runtime_1.jsxs(Themed_1.View, __assign({ style: Styles_1.default.row }, { children: [typeof item.value === 'string' ? (jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: [styles.value, { color: colors.link }] }, { children: item.value }), void 0)) : (item.value), !item.noChevron && (jsx_runtime_1.jsx(iconoir_react_native_1.NavArrowRight, { color: "#999", width: 24, height: 24 }, void 0))] }), void 0)] }), idx));
                }) }), void 0)] }), void 0));
}
exports.default = SettingBlock;
var styles = react_native_1.StyleSheet.create({
    blockWrap: {
        borderRadius: 4,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    blockTitle: {
        fontSize: 18,
        lineHeight: 30,
        marginBottom: 4,
        marginLeft: 10,
    },
    rowWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingVertical: 10,
    },
    key: {
        fontSize: 18,
        marginLeft: 10,
    },
    value: {
        fontSize: 18,
    },
});
