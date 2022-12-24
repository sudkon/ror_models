"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genetateNanoIdWithoutDash = void 0;
const nanoid_1 = require("nanoid");
function genetateNanoIdWithoutDash(numberOfChar) {
    if (numberOfChar === undefined) {
        numberOfChar = 11;
    }
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    const nanoid = (0, nanoid_1.customAlphabet)(alphabet, numberOfChar);
    return nanoid();
}
exports.genetateNanoIdWithoutDash = genetateNanoIdWithoutDash;
