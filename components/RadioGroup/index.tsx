import Box from '../Box'
import React from 'react'
import { Text, View } from '../Themed'
import { Pressable, StyleSheet } from 'react-native'
import { Circle } from 'iconoir-react-native'

export default function RadioGroup<ItemT>({
  options,
  renderOption,
  keyExtractor,
  labelExtractor,
  value,
  onChange,
}: {
  value?: ItemT
  options: ItemT[]
  renderOption?: ({ option }: { option: ItemT }) => React.ReactElement | null
  keyExtractor: (item: ItemT) => string | number
  labelExtractor: (option: ItemT) => string
  onChange: (value: ItemT | undefined) => void
}) {
  return (
    <Box direction="column" gap="small" align="flex-start">
      {options.map((option, index) => {
        const isChecked = value
          ? keyExtractor(value) === keyExtractor(option)
          : false
        return (
          <Pressable
            key={keyExtractor ? keyExtractor(option) : index}
            onPress={() => {
              if (isChecked) {
                onChange(undefined)
              } else {
                onChange(option)
              }
            }}
          >
            <Box gap="small">
              <View
                style={[
                  styles.checkbox,
                  isChecked ? styles.checked : styles.unchecked,
                ]}
              >
                {isChecked && <Circle width={22} height={22} color="white" />}
              </View>
              {renderOption ? (
                renderOption({ option })
              ) : (
                <Text style={styles.label}>{labelExtractor(option)}</Text>
              )}
            </Box>
          </Pressable>
        )
      })}
    </Box>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    borderWidth: 1,
    borderColor: '#008cd5',
  },
  checked: {
    backgroundColor: '#008cd5',
  },
  label: {
    fontSize: 20,
  },
})
