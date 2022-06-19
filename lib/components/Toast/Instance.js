"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Themed_1 = require("../Themed");
const useThemeContext_1 = require("../../hooks/useThemeContext");
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const types_1 = require("../../types");
const Box_1 = __importDefault(require("../Box"));
function ToastInstance() {
    const insets = react_native_safe_area_context_1.useSafeAreaInsets();
    const { width } = react_native_1.useWindowDimensions();
    const [message, setMessage] = react_1.useState('');
    const [type, setType] = react_1.useState('info');
    const phPosY = react_1.useRef(new react_native_1.Animated.Value(-100)).current;
    react_1.useEffect(() => {
        const onMessage = (msg, { type, message, duration }) => {
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
            setTimeout(() => {
                react_native_1.Animated.parallel([
                    react_native_1.Animated.timing(phPosY, {
                        toValue: -100,
                        duration: 200,
                        easing: react_native_1.Easing.poly(1),
                        useNativeDriver: true,
                    }),
                ]).start();
                setTimeout(() => {
                    setMessage('');
                }, 200);
            }, duration);
        };
        const token = PubSub.subscribe(types_1.PUB.TOAST_MESSAGE, onMessage);
        return () => {
            token && PubSub.unsubscribe(token);
        };
    }, []);
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    if (!message) {
        return null;
    }
    return (<react_native_1.Animated.View style={{
            paddingTop: insets.top,
            paddingBottom: 10,
            backgroundColor: theme[theme.active].toastColor[type].backgroundColor,
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            transform: [
                {
                    translateY: phPosY,
                },
            ],
        }}>
      <Box_1.default justify="center" style={{ paddingHorizontal: 20 }}>
        <Themed_1.Text style={{
            color: theme[theme.active].toastColor[type].color,
            fontSize: 18,
            textAlign: 'center',
        }}>
          {message}
        </Themed_1.Text>
      </Box_1.default>
    </react_native_1.Animated.View>);
}
exports.default = ToastInstance;
