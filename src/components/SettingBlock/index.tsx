import { NavArrowRight } from 'iconoir-react-native'
import { StyleSheet, Pressable } from 'react-native'
import { View, Text } from '../Themed'
import Styles from '../../theme/Styles'
import React, { useContext } from 'react'
import { ThemeContext } from '../../hooks/useThemeContext'

interface SettingItem {
  icon?: React.ReactElement
  title: string
  value?: string | React.ReactElement
  noChevron?: boolean
  onPress: () => void
}

export default function SettingBlock({
  title,
  items,
}: {
  title?: string
  items: SettingItem[]
}) {
  const theme = useContext(ThemeContext)
  const colors = theme[theme.active]
  return (
    <View style={{ width: '100%' }}>
      {!!title && <Text style={styles.blockTitle}>{title}</Text>}

      <View
        style={[
          styles.blockWrap,
          {
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        {items.map((item, idx) => {
          const noBorder = idx === items.length - 1
          return (
            <Pressable
              key={idx}
              style={[
                styles.rowWrap,
                {
                  borderBottomWidth: noBorder ? 0 : StyleSheet.hairlineWidth,
                  borderBottomColor: colors.borderColor,
                },
              ]}
              onPress={item.onPress}
            >
              <View style={Styles.row}>
                {item.icon as any}
                <Text style={styles.key}>{item.title}</Text>
              </View>
              <View style={Styles.row}>
                {typeof item.value === 'string' ? (
                  <Text style={[styles.value, { color: colors.link }]}>
                    {item.value}
                  </Text>
                ) : (
                  item.value
                )}

                {!item.noChevron && (
                  <NavArrowRight color="#999" width={24} height={24} />
                )}
              </View>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  blockWrap: {
    borderRadius: 4,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  blockTitle: {
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 4,
    marginLeft: 10,
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  key: {
    fontSize: 18,
    marginLeft: 10,
  },
  value: {
    fontSize: 18,
  },
})
