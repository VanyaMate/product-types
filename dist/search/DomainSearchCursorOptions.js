"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainSearchCursorOptions = exports.isDomainSearchCursorOptions = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainSearchCursorOptions = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['query'] !== 'string' ||
        typeof data['cursor'] !== 'string' ||
        typeof data['limit'] !== 'number') {
        return false;
    }
    return true;
};
exports.isDomainSearchCursorOptions = isDomainSearchCursorOptions;
var assertDomainSearchCursorOptions = function (data, variableName, typeName) {
    if (!(0, exports.isDomainSearchCursorOptions)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainSearchCursorOptions = assertDomainSearchCursorOptions;
