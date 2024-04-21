"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainFingerprint = exports.isDomainFingerprint = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainFingerprint = function (data) {
    if (typeof data !== 'object') {
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
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainFingerprint = assertDomainFingerprint;
