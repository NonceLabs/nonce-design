"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
var react_1 = require("react");
var theme_1 = __importDefault(require("../theme"));
exports.ThemeContext = react_1.createContext(theme_1.default);
