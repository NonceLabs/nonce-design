import { Text } from '../Themed'
import React, { useContext } from 'react'
import { StyleSheet, TextStyle } from 'react-native'
import { ThemeContext } from '../../hooks/useThemeContext'

export default function Heading({
  children,
  level = 1,
  style = {},
}: {
  children?: string
  level?: 1 | 2 | 3 | 4
  style?: TextStyle
}) {
  const theme = useContext(ThemeContext)
  const headingStyle = theme[theme.active].heading
  return (
    <Text style={[styles.h, headingStyle[level - 1], style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  h: {
    fontWeight: '600',
  },
})
