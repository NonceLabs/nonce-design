import { View } from '../Themed'
import { ThemeContext } from '../../hooks/useThemeContext'
import { useContext, useEffect, useRef, useState } from 'react'
import {
  TextInputProps,
  Animated,
  TextInput,
  StyleSheet,
  Easing,
  Platform,
} from 'react-native'

const INIT_Y = Platform.OS === 'android' ? 12 : 4

export default function Input(
  props: TextInputProps & { animatedLeft?: number; border?: boolean }
) {
  const [focused, setFocused] = useState(false)
  const phPosX = useRef(new Animated.Value(4)).current
  const phPosY = useRef(new Animated.Value(INIT_Y)).current
  const phOpacity = useRef(new Animated.Value(0)).current
  const phScale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (focused || !!props.value) {
      Animated.parallel([
        Animated.timing(phPosX, {
          toValue: props.animatedLeft ?? -4,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phPosY, {
          toValue: -22,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phOpacity, {
          toValue: 1,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phScale, {
          toValue: 1,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
      ]).start()
    } else if (!focused && !props.value) {
      Animated.parallel([
        Animated.timing(phPosX, {
          toValue: 4,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phPosY, {
          toValue: INIT_Y,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phOpacity, {
          toValue: 0,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
        Animated.timing(phScale, {
          toValue: 0,
          duration: 200,
          easing: Easing.poly(1),
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [props.value, focused])

  const theme = useContext(ThemeContext)
  const colors = theme[theme.active]
  const opacity = phOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  })
  const scale = phScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  })

  return (
    <View style={[{ flex: 1 }, props.border && styles.border]}>
      <Animated.Text
        style={[
          styles.placeholder,
          {
            transform: [
              {
                translateY: phPosY,
              },
              {
                translateX: phPosX,
              },
              {
                scale,
              },
            ],
            color: colors.text,
            opacity,
          },
        ]}
      >
        {props.placeholder}
      </Animated.Text>
      <TextInput
        {...props}
        placeholder=""
        style={[props.style, { color: colors.text }, styles.input]}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus && props.onFocus(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          props.onBlur && props.onBlur(e)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    padding: 8,
    flex: 1,
  },
  placeholder: {
    fontSize: 20,
    position: 'absolute',
    opacity: 0.7,
  },
  border: {
    borderRadius: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
