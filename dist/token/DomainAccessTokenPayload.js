"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAccessTokenPayload = exports.isDomainAccessTokenPayload = void 0;
var lib_1 = require("../_helpers/lib");
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
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainAccessTokenPayload = assertDomainAccessTokenPayload;
