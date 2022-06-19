"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("../Box"));
const react_1 = __importDefault(require("react"));
const Themed_1 = require("../Themed");
const react_native_1 = require("react-native");
const iconoir_react_native_1 = require("iconoir-react-native");
function CheckBoxGroup({ options, renderOption, keyExtractor, labelExtractor, value, onChange, }) {
    return (<Box_1.default direction="column" gap="small" align="flex-start">
      {options.map((option, index) => {
            const isChecked = value === null || value === void 0 ? void 0 : value.some((t) => keyExtractor(t) === keyExtractor(option));
            return (<react_native_1.Pressable key={keyExtractor ? keyExtractor(option) : index} onPress={() => {
                    if (isChecked) {
                        onChange(value.filter((t) => keyExtractor(t) !== keyExtractor(option)));
                    }
                    else {
                        onChange([...value, option]);
                    }
                }}>
            <Box_1.default gap="small">
              <Themed_1.View style={[
                    styles.checkbox,
                    isChecked ? styles.checked : styles.unchecked,
                ]}>
                {isChecked && <iconoir_react_native_1.Check width={22} height={22} color="white"/>}
              </Themed_1.View>
              {renderOption ? (renderOption({ option })) : (<Themed_1.Text style={styles.label}>{labelExtractor(option)}</Themed_1.Text>)}
            </Box_1.default>
          </react_native_1.Pressable>);
        })}
    </Box_1.default>);
}
exports.default = CheckBoxGroup;
const styles = react_native_1.StyleSheet.create({
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 2,
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
