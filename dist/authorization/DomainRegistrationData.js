"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainRegistrationData = exports.isDomainRegistrationData = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainRegistrationData = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['login'] !== 'string' ||
        typeof data['password'] !== 'string' ||
        typeof data['email'] !== 'string' ||
        typeof data['remember'] !== 'boolean') {
        return false;
    }
    return true;
};
exports.isDomainRegistrationData = isDomainRegistrationData;
var assertDomainRegistrationData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainRegistrationData)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainRegistrationData = assertDomainRegistrationData;
