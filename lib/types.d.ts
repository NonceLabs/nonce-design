export declare type ToastType = 'success' | 'error' | 'info' | 'warning';
export declare enum PUB {
    TOAST_MESSAGE = "TOAST_MESSAGE"
}
export interface ToastPayload {
    type: ToastType;
    message: string;
    duration: number;
}
export declare type ButtonType = 'default' | 'primary';
export interface ThemeProps {
}
