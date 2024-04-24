"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAuthResponse = exports.isDomainAuthResponse = void 0;
var DomainUser_1 = require("../user/DomainUser");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainAuthResponse = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (!Array.isArray(data['tokens']) ||
        typeof data['tokens'][0] !== 'string' ||
        typeof data['tokens'][1] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user'])) {
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
