"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainAuthResponse = exports.isDomainAuthResponse = void 0;
var lib_1 = require("../_helpers/lib");
var user_1 = require("../user");
var isDomainAuthResponse = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['token'] !== 'string' ||
        !(0, user_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainAuthResponse = isDomainAuthResponse;
var assertDomainAuthResponse = function (data, variableName, typeName) {
    if (!(0, exports.isDomainAuthResponse)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainAuthResponse = assertDomainAuthResponse;
