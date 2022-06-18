"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pubsub_js_1 = __importDefault(require("pubsub-js"));
var types_1 = require("../../types");
var DURATION = 2000;
var toast = function (type, message, duration) {
    pubsub_js_1.default.publish(types_1.PUB.TOAST_MESSAGE, {
        type: type,
        message: message,
        duration: duration,
    });
};
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.error = function (error, duration) {
        if (duration === void 0) { duration = DURATION; }
        if (error instanceof Error) {
            toast('error', error.message, duration);
        }
        else if (typeof error === 'string') {
            toast('error', error, duration);
        }
    };
    Toast.success = function (message, duration) {
        if (duration === void 0) { duration = DURATION; }
        toast('success', message, duration);
    };
    Toast.info = function (message, duration) {
        if (duration === void 0) { duration = DURATION; }
        toast('info', message, duration);
    };
    Toast.warning = function (message, duration) {
        if (duration === void 0) { duration = DURATION; }
        toast('warning', message, duration);
    };
    return Toast;
}());
exports.default = Toast;
