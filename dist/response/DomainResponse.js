"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainResponse = exports.isDomainResponse = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var isDomainResponse = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['data'] !== 'object') {
        return false;
    }
    return true;
};
exports.isDomainResponse = isDomainResponse;
var assertDomainResponse = function (data, variableName, typeName) {
    if (!(0, exports.isDomainResponse)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainResponse = assertDomainResponse;
