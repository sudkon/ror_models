"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTypes = exports.appsModel = exports.userSchema = exports.userModel = void 0;
const user_1 = require("./src/models/user");
Object.defineProperty(exports, "userModel", { enumerable: true, get: function () { return user_1.userModel; } });
Object.defineProperty(exports, "userSchema", { enumerable: true, get: function () { return user_1.userSchema; } });
const apps_1 = require("./src/models/apps");
Object.defineProperty(exports, "appsModel", { enumerable: true, get: function () { return apps_1.appsModel; } });
const customTypes = __importStar(require("./src/objects/customTypes"));
exports.customTypes = customTypes;
