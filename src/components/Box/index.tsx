import { View } from '../Themed'
import { ThemeContext } from '../../hooks/useThemeContext'
import { useContext } from 'react'
import { FlexStyle, StyleSheet, ViewStyle } from 'react-native'
import Styles from '../../theme/Styles'

const padding = {
  none: 0,
  small: 5,
  medium: 10,
  large: 15,
}

export default function Box({
  children,
  backgroundColor,
  style = {},
  direction = 'row',
  align = 'center',
  justify,
  gap = 'none',
  margin = 'none',
  border = false,
  pad = 'none',
  full = false,
}: {
  children: React.ReactNode
  backgroundColor?: string
  align?: FlexStyle['alignItems']
  justify?: FlexStyle['justifyContent']
  direction?: 'row' | 'column'
  style?: ViewStyle
  border?: boolean
  gap?: 'none' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  pad?: 'none' | 'small' | 'medium' | 'large'
  margin?: 'none' | 'small' | 'medium' | 'large'
  full?: boolean
}) {
  const _children = []
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      _children.push(children[i])
      if (gap !== 'none' && i < children.length - 1) {
        _children.push(<View key={i} style={styles[gap]} />)
      }
    }
  } else {
    _children.push(children)
  }
  const theme = useContext(ThemeContext)

  return (
    <View
      style={[
        Styles.row,
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          backgroundColor,
        },
        style,
        border && { borderColor: theme.light.borderColor, borderWidth: 1 },
        {
          padding: padding[pad],
          width: full ? '100%' : undefined,
          margin: padding[margin],
        },
      ]}
    >
      {_children}
    </View>
  )
}

const styles = StyleSheet.create({
  small: {
    width: 8,
    height: 8,
  },
  medium: {
    width: 16,
    height: 16,
  },
  large: {
    width: 24,
    height: 24,
  },
  xlarge: {
    width: 32,
    height: 32,
  },
  xxlarge: {
    height: 50,
    width: 50,
  },
})
