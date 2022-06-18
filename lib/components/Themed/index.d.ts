/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import { Text as DefaultText, View as DefaultView } from 'react-native';
declare type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};
export declare type TextProps = ThemeProps & DefaultText['props'];
export declare type ViewProps = ThemeProps & DefaultView['props'];
export declare function Text(props: TextProps): JSX.Element;
export declare function View(props: ViewProps): JSX.Element;
export {};
