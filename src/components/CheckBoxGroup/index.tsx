import Box from '../Box'
import React from 'react'
import { Text, View } from '../Themed'
import { Pressable, StyleSheet } from 'react-native'
import { Check } from 'iconoir-react-native'

export default function CheckBoxGroup<ItemT>({
  options,
  renderOption,
  keyExtractor,
  labelExtractor,
  value,
  onChange,
}: {
  value: ItemT[]
  options: ItemT[]
  renderOption?: ({ option }: { option: ItemT }) => React.ReactElement | null
  keyExtractor: (item: ItemT) => string | number
  labelExtractor: (option: ItemT) => string
  onChange: (value: ItemT[]) => void
}) {
  return (
    <Box direction="column" gap="small" align="flex-start">
      {options.map((option, index) => {
        const isChecked = value?.some(
          (t) => keyExtractor(t) === keyExtractor(option)
        )
        return (
          <Pressable
            key={keyExtractor ? keyExtractor(option) : index}
            onPress={() => {
              if (isChecked) {
                onChange(
                  value.filter((t) => keyExtractor(t) !== keyExtractor(option))
                )
              } else {
                onChange([...value, option])
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
                {isChecked && <Check width={22} height={22} color="white" />}
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
    width: 22,
    height: 22,
    borderRadius: 2,
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
