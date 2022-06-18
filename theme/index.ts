const tintColorLight = '#333'
const tintColorDark = '#fff'

const toastColor = {
  success: {
    backgroundColor: '#00C781',
    color: '#fff',
  },
  error: {
    backgroundColor: '#FF4040',
    color: '#fff',
  },
  info: {
    backgroundColor: '#3D138D',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#FFCA58',
    color: '#000',
  },
}

const buttonSize = {
  small: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  medium: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
}

const ButtonTextSize = {
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 20,
  },
}

const heading = [
  {
    fontSize: 30,
    lineHeight: 40,
  },
  {
    fontSize: 24,
    lineHeight: 30,
  },
  {
    fontSize: 18,
    lineHeight: 24,
  },
  {
    fontSize: 14,
    lineHeight: 18,
  },
]

export default {
  active: 'light' as 'light' | 'dark',
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    screenBackground: '#eee',
    link: '#008cd5',
    cardBackground: '#fff',
    bannerBackground: '#e3e3e3',
    modalBackground: '#f6eee3',
    borderColor: '#e3e3e3',
    iconButtonBg: '#FFCA58',
    inputBackground: '#e3e3e3',
    toastColor,
    button: {
      primary: {
        backgroundColor: '#333',
        color: '#fff',
        borderColor: '#333',
        buttonSize,
        ButtonTextSize,
      },
      default: {
        backgroundColor: 'transparent',
        color: '#333',
        borderColor: '#e3e3e3',
        buttonSize,
        ButtonTextSize,
      },
    },
    heading,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    screenBackground: '#000',
    link: '#FFCA58',
    cardBackground: '#222',
    bannerBackground: '#333',
    modalBackground: 'rgb(36,35,37)',
    borderColor: '#999',
    iconButtonBg: '#008cd5',
    inputBackground: '#222',
    toastColor,
    button: {
      primary: {
        backgroundColor: '#FFCA58',
        color: '#000',
        borderColor: '#333',
        buttonSize,
        ButtonTextSize,
      },
      default: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderColor: '#e3e3e3',
        buttonSize,
        ButtonTextSize,
      },
    },
    heading,
  },
}
