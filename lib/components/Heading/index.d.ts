import { TextStyle } from 'react-native';
export default function Heading({ children, level, style, }: {
    children?: string;
    level?: 1 | 2 | 3 | 4;
    style?: TextStyle;
}): JSX.Element;
