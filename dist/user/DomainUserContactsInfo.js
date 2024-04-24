"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserContactsInfo = exports.isDomainUserContactsInfo = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainUserContactsInfo = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['email'] !== 'string' ||
        typeof data['phoneNumber'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainUserContactsInfo = isDomainUserContactsInfo;
var assertDomainUserContactsInfo = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserContactsInfo)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserContactsInfo = assertDomainUserContactsInfo;
