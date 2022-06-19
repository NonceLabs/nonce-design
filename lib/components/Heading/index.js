"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Themed_1 = require("../Themed");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const useThemeContext_1 = require("../../hooks/useThemeContext");
function Heading({ children, level = 1, style = {}, }) {
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    const headingStyle = theme[theme.active].heading;
    return (<Themed_1.Text style={[styles.h, headingStyle[level - 1], style]}>{children}</Themed_1.Text>);
}
exports.default = Heading;
const styles = react_native_1.StyleSheet.create({
    h: {
        fontWeight: '600',
    },
});
