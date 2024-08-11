"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainUserNameInfo = exports.isDomainUserNameInfo = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainUserNameInfo = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['firstName'] !== 'string' ||
        typeof data['lastName'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainUserNameInfo = isDomainUserNameInfo;
var assertDomainUserNameInfo = function (data, variableName, typeName) {
    if (!(0, exports.isDomainUserNameInfo)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainUserNameInfo = assertDomainUserNameInfo;
