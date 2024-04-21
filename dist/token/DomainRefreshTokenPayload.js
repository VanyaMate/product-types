"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainRefreshTokenPayload = exports.isDomainRefreshTokenPayload = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainRefreshTokenPayload = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['id'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainRefreshTokenPayload = isDomainRefreshTokenPayload;
var assertDomainRefreshTokenPayload = function (data, variableName, typeName) {
    if (!(0, exports.isDomainRefreshTokenPayload)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainRefreshTokenPayload = assertDomainRefreshTokenPayload;
