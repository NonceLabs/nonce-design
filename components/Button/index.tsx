import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native'
import { ButtonType } from '../../types'
import { Text } from '../Themed'
import { useContext } from 'react'
import { ThemeContext } from '../../hooks/useThemeContext'

export default function Button({
  label,
  onPress,
  style,
  size = 'medium',
  type = 'default',
  disabled = false,
  primary = false,
  full = false,
}: {
  label: string
  onPress: () => void
  size?: 'small' | 'medium' | 'large'
  style?: ViewProps
  type?: ButtonType
  disabled?: boolean
  primary?: boolean
  full?: boolean
}) {
  const theme = useContext(ThemeContext)
  const istyles = theme[theme.active]

  let _type = primary ? 'primary' : type
  let _size = full ? 'large' : size
  const buttonStyle = istyles.button[_type]
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttonStyle.backgroundColor,
          borderColor: buttonStyle.borderColor,
          width: full ? '100%' : 'auto',
        },
        style,
        { opacity: disabled ? 0.5 : 1 },
        buttonStyle.buttonSize[_size],
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.9}
    >
      <Text
        style={[
          {
            color: buttonStyle.color,
          },
          buttonStyle.ButtonTextSize[_size],
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
