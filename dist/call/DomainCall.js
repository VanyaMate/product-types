"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainCall = exports.isDomainCall = void 0;
var DomainUser_1 = require("../user/DomainUser");
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainCall = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['finished'] !== 'boolean' ||
        typeof data['initiatorLogin'] !== 'string' ||
        typeof data['creationDate'] !== 'number' ||
        typeof data['finishedDate'] !== 'number' ||
        typeof data['connectionId'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainCall = isDomainCall;
var assertDomainCall = function (data, variableName, typeName) {
    if (!(0, exports.isDomainCall)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainCall = assertDomainCall;
