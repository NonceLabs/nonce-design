"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_js_1 = __importDefault(require("pubsub-js"));
const types_1 = require("../../types");
const DURATION = 2000;
const toast = (type, message, duration) => {
    pubsub_js_1.default.publish(types_1.PUB.TOAST_MESSAGE, {
        type,
        message,
        duration,
    });
};
class Toast {
    static error(error, duration = DURATION) {
        if (error instanceof Error) {
            toast('error', error.message, duration);
        }
        else if (typeof error === 'string') {
            toast('error', error, duration);
        }
    }
    static success(message, duration = DURATION) {
        toast('success', message, duration);
    }
    static info(message, duration = DURATION) {
        toast('info', message, duration);
    }
    static warning(message, duration = DURATION) {
        toast('warning', message, duration);
    }
}
exports.default = Toast;
