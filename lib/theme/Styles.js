"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICON_WRAP_SIZE = void 0;
const react_native_1 = require("react-native");
exports.ICON_WRAP_SIZE = 40;
const Styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWrap: {
        width: exports.ICON_WRAP_SIZE,
        height: exports.ICON_WRAP_SIZE,
        borderRadius: exports.ICON_WRAP_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page: {
        flex: 1,
        padding: 20,
    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        padding: 10,
        borderRadius: 4,
    },
});
exports.default = Styles;
