"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
var isArray = function (data, type) {
    var _isArray = Array.isArray(data);
    if (_isArray) {
        if (typeof type === 'string') {
            return data.every(function (item) { return typeof item === type; });
        }
        else {
            return data.every(type);
        }
    }
    return false;
};
exports.isArray = isArray;
