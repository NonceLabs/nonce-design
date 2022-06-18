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
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var types_1 = require("../../types");
var Box_1 = __importDefault(require("../Box"));
function ToastInstance() {
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    var width = react_native_1.useWindowDimensions().width;
    var _a = react_1.useState(''), message = _a[0], setMessage = _a[1];
    var _b = react_1.useState('info'), type = _b[0], setType = _b[1];
    var phPosY = react_1.useRef(new react_native_1.Animated.Value(-100)).current;
    react_1.useEffect(function () {
        var onMessage = function (msg, _a) {
            var type = _a.type, message = _a.message, duration = _a.duration;
            setType(type);
            setMessage(message);
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(phPosY, {
                    toValue: 0,
                    duration: 200,
                    easing: react_native_1.Easing.poly(1),
                    useNativeDriver: true,
                }),
            ]).start();
            setTimeout(function () {
                react_native_1.Animated.parallel([
                    react_native_1.Animated.timing(phPosY, {
                        toValue: -100,
                        duration: 200,
                        easing: react_native_1.Easing.poly(1),
                        useNativeDriver: true,
                    }),
                ]).start();
                setTimeout(function () {
                    setMessage('');
                }, 200);
            }, duration);
        };
        var token = PubSub.subscribe(types_1.PUB.TOAST_MESSAGE, onMessage);
        return function () {
            token && PubSub.unsubscribe(token);
        };
    }, []);
    var theme = react_1.useContext(useThemeContext_1.ThemeContext);
    if (!message) {
        return null;
    }
    return (jsx_runtime_1.jsx(react_native_1.Animated.View, __assign({ style: {
            paddingTop: insets.top,
            paddingBottom: 10,
            backgroundColor: theme[theme.active].toastColor[type].backgroundColor,
            position: 'absolute',
            top: 0,
            left: 0,
            width: width,
            transform: [
                {
                    translateY: phPosY,
                },
            ],
        } }, { children: jsx_runtime_1.jsx(Box_1.default, __assign({ justify: "center", style: { paddingHorizontal: 20 } }, { children: jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: {
                    color: theme[theme.active].toastColor[type].color,
                    fontSize: 18,
                    textAlign: 'center',
                } }, { children: message }), void 0) }), void 0) }), void 0));
}
exports.default = ToastInstance;
