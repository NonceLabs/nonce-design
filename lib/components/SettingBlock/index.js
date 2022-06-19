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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iconoir_react_native_1 = require("iconoir-react-native");
const react_native_1 = require("react-native");
const Themed_1 = require("../Themed");
const Styles_1 = __importDefault(require("../../theme/Styles"));
const react_1 = __importStar(require("react"));
const useThemeContext_1 = require("../../hooks/useThemeContext");
function SettingBlock({ title, items, }) {
    const theme = react_1.useContext(useThemeContext_1.ThemeContext);
    const colors = theme[theme.active];
    return (<Themed_1.View style={{ width: '100%' }}>
      {!!title && <Themed_1.Text style={styles.blockTitle}>{title}</Themed_1.Text>}

      <Themed_1.View style={[
            styles.blockWrap,
            {
                backgroundColor: colors.cardBackground,
            },
        ]}>
        {items.map((item, idx) => {
            const noBorder = idx === items.length - 1;
            return (<react_native_1.Pressable key={idx} style={[
                    styles.rowWrap,
                    {
                        borderBottomWidth: noBorder ? 0 : react_native_1.StyleSheet.hairlineWidth,
                        borderBottomColor: colors.borderColor,
                    },
                ]} onPress={item.onPress}>
              <Themed_1.View style={Styles_1.default.row}>
                {item.icon}
                <Themed_1.Text style={styles.key}>{item.title}</Themed_1.Text>
              </Themed_1.View>
              <Themed_1.View style={Styles_1.default.row}>
                {typeof item.value === 'string' ? (<Themed_1.Text style={[styles.value, { color: colors.link }]}>
                    {item.value}
                  </Themed_1.Text>) : (item.value)}

                {!item.noChevron && (<iconoir_react_native_1.NavArrowRight color="#999" width={24} height={24}/>)}
              </Themed_1.View>
            </react_native_1.Pressable>);
        })}
      </Themed_1.View>
    </Themed_1.View>);
}
exports.default = SettingBlock;
const styles = react_native_1.StyleSheet.create({
    blockWrap: {
        borderRadius: 4,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    blockTitle: {
        fontSize: 18,
        lineHeight: 30,
        marginBottom: 4,
        marginLeft: 10,
    },
    rowWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingVertical: 10,
    },
    key: {
        fontSize: 18,
        marginLeft: 10,
    },
    value: {
        fontSize: 18,
    },
});
