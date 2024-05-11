"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAccessTokenPayload = exports.isDomainAccessTokenPayload = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainAccessTokenPayload = function (data) {
    if (typeof data !== 'object') {
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