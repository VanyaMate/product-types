"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLoginData = exports.isDomainLoginData = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainLoginData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
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
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLoginData = assertDomainLoginData;
