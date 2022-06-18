import { StyleSheet } from 'react-native'

export const ICON_WRAP_SIZE = 40

const Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: ICON_WRAP_SIZE,
    height: ICON_WRAP_SIZE,
    borderRadius: ICON_WRAP_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    padding: 20,
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    borderRadius: 4,
  },
})

export default Styles
