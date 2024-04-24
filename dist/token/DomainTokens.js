"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainTokens = exports.isDomainTokens = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainTokens = function (data) {
    if (!Array.isArray(data)) {
        return false;
    }
    if (typeof data[0] !== 'string' ||
        typeof data[1] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainTokens = isDomainTokens;
var assertDomainTokens = function (data, variableName, typeName) {
    if (!(0, exports.isDomainTokens)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainTokens = assertDomainTokens;
