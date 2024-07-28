"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSearchItemOptions = exports.isDomainSearchItemOptions = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainSearchItemOptions = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['query'] !== 'string' ||
        typeof data['limit'] !== 'number' ||
        typeof data['offset'] !== 'number') {
        return false;
    }
    return true;
};
exports.isDomainSearchItemOptions = isDomainSearchItemOptions;
var assertDomainSearchItemOptions = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSearchItemOptions)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSearchItemOptions = assertDomainSearchItemOptions;
