"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSearchOptions = exports.isDomainSearchOptions = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainSearchOptions = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['query'] !== 'string' ||
        !Array.isArray(data['searchIn'])) {
        return false;
    }
    return true;
};
exports.isDomainSearchOptions = isDomainSearchOptions;
var assertDomainSearchOptions = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSearchOptions)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSearchOptions = assertDomainSearchOptions;
