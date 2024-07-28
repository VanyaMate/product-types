"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainRefreshTokenPayload = exports.isDomainRefreshTokenPayload = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainRefreshTokenPayload = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
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
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainRefreshTokenPayload = assertDomainRefreshTokenPayload;
