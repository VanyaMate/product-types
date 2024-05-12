"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFingerprint = exports.isDomainFingerprint = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainFingerprint = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['ip'] !== 'string' ||
        typeof data['browser'] !== 'string' ||
        typeof data['device'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainFingerprint = isDomainFingerprint;
var assertDomainFingerprint = function (data, variableName, typeName) {
    if (!(0, exports.isDomainFingerprint)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFingerprint = assertDomainFingerprint;
