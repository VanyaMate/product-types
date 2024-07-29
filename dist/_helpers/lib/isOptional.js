"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOptional = void 0;
var isOptional = function (data, type, isArray) {
    if (isArray === void 0) { isArray = false; }
    var isEmpty = typeof data === 'undefined';
    if (isEmpty)
        return true;
    if (isArray) {
        return Array.isArray(data) && data.every(function (item) { return typeof item === type; });
    }
    return typeof data === type;
};
exports.isOptional = isOptional;
