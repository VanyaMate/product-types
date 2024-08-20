"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAuthResponse = exports.isDomainAuthResponse = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var DomainUserFull_1 = require("../user/DomainUserFull");
var isDomainAuthResponse = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!Array.isArray(data['tokens']) ||
        typeof data['tokens'][0] !== 'string' ||
        typeof data['tokens'][1] !== 'string' ||
        !(0, DomainUserFull_1.isDomainUserFull)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainAuthResponse = isDomainAuthResponse;
var assertDomainAuthResponse = function (data, variableName, typeName) {
    if (!(0, exports.isDomainAuthResponse)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainAuthResponse = assertDomainAuthResponse;
