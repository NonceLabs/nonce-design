import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeContext } from '../../hooks/useThemeContext'
import Colors from '../../theme'
import { ThemeProps } from '../../types'

export default function Layout({
  children,
  themeColor = 'light',
  theme,
}: {
  themeColor?: 'light' | 'dark'
  theme?: ThemeProps
  children?: React.ReactNode
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ ...Colors, active: themeColor }}>
          {children}
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
