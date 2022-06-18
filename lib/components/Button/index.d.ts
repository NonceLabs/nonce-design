import { ViewProps } from 'react-native';
import { ButtonType } from '../../types';
export default function Button({ label, onPress, style, size, type, disabled, primary, full, }: {
    label: string;
    onPress: () => void;
    size?: 'small' | 'medium' | 'large';
    style?: ViewProps;
    type?: ButtonType;
    disabled?: boolean;
    primary?: boolean;
    full?: boolean;
}): JSX.Element;
