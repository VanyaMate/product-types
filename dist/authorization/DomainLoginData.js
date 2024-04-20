"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLoginData = exports.isDomainLoginData = void 0;
var lib_1 = require("../_helpers/lib");
var isDomainLoginData = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['login'] !== 'string' ||
        typeof data['password'] !== 'string' ||
        typeof data['remember'] !== 'boolean') {
        return false;
    }
    return true;
};
exports.isDomainLoginData = isDomainLoginData;
var assertDomainLoginData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLoginData)(data)) {
        (0, lib_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLoginData = assertDomainLoginData;
