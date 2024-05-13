"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTokenGenerateData = exports.isDomainTokenGenerateData = void 0;
var DomainFingerprint_1 = require("../fingerprint/DomainFingerprint");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainTokenGenerateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['user_id'] !== 'string' ||
        !(0, DomainFingerprint_1.isDomainFingerprint)(data['fingerprint'])) {
        return false;
    }
    return true;
};
exports.isDomainTokenGenerateData = isDomainTokenGenerateData;
var assertDomainTokenGenerateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainTokenGenerateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTokenGenerateData = assertDomainTokenGenerateData;
