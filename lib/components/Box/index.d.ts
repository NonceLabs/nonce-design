/// <reference types="react" />
import { FlexStyle, ViewStyle } from 'react-native';
export default function Box({ children, backgroundColor, style, direction, align, justify, gap, margin, border, pad, full, }: {
    children: React.ReactNode;
    backgroundColor?: string;
    align?: FlexStyle['alignItems'];
    justify?: FlexStyle['justifyContent'];
    direction?: 'row' | 'column';
    style?: ViewStyle;
    border?: boolean;
    gap?: 'none' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    pad?: 'none' | 'small' | 'medium' | 'large';
    margin?: 'none' | 'small' | 'medium' | 'large';
    full?: boolean;
}): JSX.Element;
