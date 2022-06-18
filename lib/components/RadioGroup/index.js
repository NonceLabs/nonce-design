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
var Box_1 = __importDefault(require("../Box"));
var Themed_1 = require("../Themed");
var react_native_1 = require("react-native");
var iconoir_react_native_1 = require("iconoir-react-native");
function RadioGroup(_a) {
    var options = _a.options, renderOption = _a.renderOption, keyExtractor = _a.keyExtractor, labelExtractor = _a.labelExtractor, value = _a.value, onChange = _a.onChange;
    return (jsx_runtime_1.jsx(Box_1.default, __assign({ direction: "column", gap: "small", align: "flex-start" }, { children: options.map(function (option, index) {
            var isChecked = value
                ? keyExtractor(value) === keyExtractor(option)
                : false;
            return (jsx_runtime_1.jsx(react_native_1.Pressable, __assign({ onPress: function () {
                    if (isChecked) {
                        onChange(undefined);
                    }
                    else {
                        onChange(option);
                    }
                } }, { children: jsx_runtime_1.jsxs(Box_1.default, __assign({ gap: "small" }, { children: [jsx_runtime_1.jsx(Themed_1.View, __assign({ style: [
                                styles.checkbox,
                                isChecked ? styles.checked : styles.unchecked,
                            ] }, { children: isChecked && jsx_runtime_1.jsx(iconoir_react_native_1.Circle, { width: 22, height: 22, color: "white" }, void 0) }), void 0), renderOption ? (renderOption({ option: option })) : (jsx_runtime_1.jsx(Themed_1.Text, __assign({ style: styles.label }, { children: labelExtractor(option) }), void 0))] }), void 0) }), keyExtractor ? keyExtractor(option) : index));
        }) }), void 0));
}
exports.default = RadioGroup;
var styles = react_native_1.StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unchecked: {
        borderWidth: 1,
        borderColor: '#008cd5',
    },
    checked: {
        backgroundColor: '#008cd5',
    },
    label: {
        fontSize: 20,
    },
});
