"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAccessTokenPayload = exports.isDomainAccessTokenPayload = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainAccessTokenPayload = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['user_id'] !== 'string' ||
        typeof data['id'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainAccessTokenPayload = isDomainAccessTokenPayload;
var assertDomainAccessTokenPayload = function (data, variableName, typeName) {
    if (!(0, exports.isDomainAccessTokenPayload)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainAccessTokenPayload = assertDomainAccessTokenPayload;
