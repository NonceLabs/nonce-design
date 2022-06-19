"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Themed_1 = require("../Themed");
const useThemeContext_1 = require("../../hooks/useThemeContext");
const react_1 = require("react");
const react_native_1 = require("react-native");
const INIT_Y = react_native_1.Platform.OS === 'android' ? 12 : 4;
function Input(props) {
    const [focused, setFocused] = react_1.useState(false);
    const phPosX = react_1.useRef(new react_native_1.Animated.Value(4)).current;
    const phPosY = react_1.useRef(new react_native_1.Animated.Value(INIT_Y)).current;
    const phOpacity = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    const phScale = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.useEffect(() => {
        var _a;
        if (focused || !!props.value) {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(phPosX, {
                    toValue: (_a = props.animatedLeft) !== null && _a !== void 0 ? _a : -4,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phPosY, {
                    toValue: -22,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phOpacity, {
                    toValue: 1,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phScale, {
                    toValue: 1,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
            ]).start();
        }
        else if (!focused && !props.value) {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(phPosX, {
                    toValue: 4,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phPosY, {
                    toValue: INIT_Y,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phOpacity, {
                    toValue: 0,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(phScale, {
                    toValue: 0,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [props.value, focused]);
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    const colors = theme[theme.active];
    const opacity = phOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
    });
    const scale = phScale.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.7],
    });
    return (<Themed_1.View style={[{ flex: 1 }, props.border && styles.border]}>
      <react_native_1.Animated.Text style={[
            styles.placeholder,
            {
                transform: [
                    {
                        translateY: phPosY,
                    },
                    {
                        translateX: phPosX,
                    },
                    {
                        scale,
                    },
                ],
                color: colors.text,
                opacity,
            },
        ]}>
        {props.placeholder}
      </react_native_1.Animated.Text>
      <react_native_1.TextInput {...props} placeholder="" style={[props.style, { color: colors.text }, styles.input]} onFocus={(e) => {
            setFocused(true);
            props.onFocus && props.onFocus(e);
        }} onBlur={(e) => {
            setFocused(false);
            props.onBlur && props.onBlur(e);
        }}/>
    </Themed_1.View>);
}
exports.default = Input;
const styles = react_native_1.StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 8,
        flex: 1,
    },
    placeholder: {
        fontSize: 20,
        position: 'absolute',
        opacity: 0.7,
    },
    border: {
        borderRadius: 6,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
});
