"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Themed_1 = require("../Themed");
const useThemeContext_1 = require("../../hooks/useThemeContext");
const react_1 = require("react");
const react_native_1 = require("react-native");
const Styles_1 = __importDefault(require("../../theme/Styles"));
const padding = {
    none: 0,
    small: 5,
    medium: 10,
    large: 15,
};
function Box({ children, backgroundColor, style = {}, direction = 'row', align = 'center', justify, gap = 'none', margin = 'none', border = false, pad = 'none', full = false, }) {
    const _children = [];
    if (Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            _children.push(children[i]);
            if (gap !== 'none' && i < children.length - 1) {
                _children.push(<Themed_1.View key={i} style={styles[gap]}/>);
            }
        }
    }
    else {
        _children.push(children);
    }
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    return (<Themed_1.View style={[
            Styles_1.default.row,
            {
                flexDirection: direction,
                alignItems: align,
                justifyContent: justify,
                backgroundColor,
            },
            style,
            border && { borderColor: theme.light.borderColor, borderWidth: 1 },
            {
                padding: padding[pad],
                width: full ? '100%' : undefined,
                margin: padding[margin],
            },
        ]}>
      {_children}
    </Themed_1.View>);
}
exports.default = Box;
const styles = react_native_1.StyleSheet.create({
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
