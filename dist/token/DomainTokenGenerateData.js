"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTokenGenerateData = exports.isDomainTokenGenerateData = void 0;
var lib_1 = require("../_helpers/lib");
var DomainFingerprint_1 = require("../fingerprint/DomainFingerprint");
var isDomainTokenGenerateData = function (data) {
    if (typeof data !== 'object') {
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
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTokenGenerateData = assertDomainTokenGenerateData;
