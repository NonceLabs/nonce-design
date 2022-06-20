export type ToastType = 'success' | 'error' | 'info' | 'warning'

export enum PUB {
  TOAST_MESSAGE = 'TOAST_MESSAGE',
}

export interface ToastPayload {
  type: ToastType
  message: string
  duration: number
}

export type ButtonType = 'default' | 'primary'

export interface ThemeProps {}
