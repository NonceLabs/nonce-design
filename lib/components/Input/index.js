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
var Themed_1 = require("../Themed");
var useThemeContext_1 = require("../../hooks/useThemeContext");
var react_1 = require("react");
var react_native_1 = require("react-native");
var INIT_Y = react_native_1.Platform.OS === 'android' ? 12 : 4;
function Input(props) {
    var _a = react_1.useState(false), focused = _a[0], setFocused = _a[1];
    var phPosX = react_1.useRef(new react_native_1.Animated.Value(4)).current;
    var phPosY = react_1.useRef(new react_native_1.Animated.Value(INIT_Y)).current;
    var phOpacity = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var phScale = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.useEffect(function () {
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
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    var colors = theme[theme.active];
    var opacity = phOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
    });
    var scale = phScale.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.7],
    });
    return (jsx_runtime_1.jsxs(Themed_1.View, __assign({ style: [{ flex: 1 }, props.border && styles.border] }, { children: [jsx_runtime_1.jsx(react_native_1.Animated.Text, __assign({ style: [
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
                                scale: scale,
                            },
                        ],
                        color: colors.text,
                        opacity: opacity,
                    },
                ] }, { children: props.placeholder }), void 0), jsx_runtime_1.jsx(react_native_1.TextInput, __assign({}, props, { placeholder: "", style: [props.style, { color: colors.text }, styles.input], onFocus: function (e) {
                    setFocused(true);
                    props.onFocus && props.onFocus(e);
                }, onBlur: function (e) {
                    setFocused(false);
                    props.onBlur && props.onBlur(e);
                } }), void 0)] }), void 0));
}
exports.default = Input;
var styles = react_native_1.StyleSheet.create({
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
