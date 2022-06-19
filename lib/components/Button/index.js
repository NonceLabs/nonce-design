"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Themed_1 = require("../Themed");
const react_1 = require("react");
const useThemeContext_1 = require("../../hooks/useThemeContext");
function Button({ label, onPress, style, backgroundColor, size = 'medium', type = 'default', disabled = false, primary = false, full = false, }) {
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    const istyles = theme[theme.active];
    let _type = primary ? 'primary' : type;
    let _size = full ? 'large' : size;
    const buttonStyle = istyles.button[_type];
    return (<react_native_1.TouchableOpacity style={[
            styles.button,
            {
                backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : buttonStyle.backgroundColor,
                borderColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : buttonStyle.borderColor,
                width: full ? '100%' : 'auto',
            },
            style,
            { opacity: disabled ? 0.5 : 1 },
            buttonStyle.buttonSize[_size],
        ]} onPress={onPress} disabled={disabled} activeOpacity={0.9}>
      <Themed_1.Text style={[
            {
                color: buttonStyle.color,
            },
            buttonStyle.ButtonTextSize[_size],
        ]}>
        {label}
      </Themed_1.Text>
    </react_native_1.TouchableOpacity>);
}
exports.default = Button;
const styles = react_native_1.StyleSheet.create({
    button: {
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
