import { ViewProps } from 'react-native';
import { ButtonType } from '../../types';
export default function Button({ label, onPress, style, backgroundColor, size, type, disabled, primary, full, }: {
    label: string;
    onPress: () => void;
    size?: 'small' | 'medium' | 'large';
    style?: ViewProps;
    type?: ButtonType;
    disabled?: boolean;
    primary?: boolean;
    full?: boolean;
    backgroundColor?: string;
}): JSX.Element;
