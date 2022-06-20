import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Host, Portal } from 'react-native-portalize'
import { ThemeContext } from '../../hooks/useThemeContext'
import Colors from '../../theme'
import { ThemeProps } from '../../types'
import ToastInstance from '../Toast/Instance'

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
        <Host>
          <ThemeContext.Provider value={{ ...Colors, active: themeColor }}>
            {children}
            <Portal>
              <ToastInstance />
            </Portal>
          </ThemeContext.Provider>
        </Host>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
