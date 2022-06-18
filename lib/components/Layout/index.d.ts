/// <reference types="react" />
import { ThemeProps } from '../../types';
export default function Layout({ children, themeColor, theme, }: {
    themeColor?: 'light' | 'dark';
    theme?: ThemeProps;
    children?: React.ReactNode;
}): JSX.Element;
