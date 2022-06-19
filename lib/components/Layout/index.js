"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_native_portalize_1 = require("react-native-portalize");
const useThemeContext_1 = require("../../hooks/useThemeContext");
const theme_1 = __importDefault(require("../../theme"));
const Instance_1 = __importDefault(require("../Toast/Instance"));
function Layout({ children, themeColor = 'light', theme, }) {
    return (<react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
      <react_native_safe_area_context_1.SafeAreaProvider>
        <react_native_portalize_1.Host>
          <useThemeContext_1.ThemeContext.Provider value={Object.assign(Object.assign({}, theme_1.default), { active: themeColor })}>
            {children}
            <react_native_portalize_1.Portal>
              <Instance_1.default />
            </react_native_portalize_1.Portal>
          </useThemeContext_1.ThemeContext.Provider>
        </react_native_portalize_1.Host>
      </react_native_safe_area_context_1.SafeAreaProvider>
    </react_native_gesture_handler_1.GestureHandlerRootView>);
}
exports.default = Layout;
