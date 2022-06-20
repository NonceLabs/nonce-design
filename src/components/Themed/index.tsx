/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { ThemeContext } from '../../hooks/useThemeContext'
import { useContext } from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props

  const theme = useContext(ThemeContext)
  const colors = theme[theme.active]
  return <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props

  return <DefaultView style={[{}, style]} {...otherProps} />
}
