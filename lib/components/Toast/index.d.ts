export default class Toast {
    static error(error: unknown, duration?: number): void;
    static success(message: string, duration?: number): void;
    static info(message: string, duration?: number): void;
    static warning(message: string, duration?: number): void;
}
