"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguage = exports.isDomainLanguage = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguage = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainLanguage = isDomainLanguage;
var assertDomainLanguage = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguage)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguage = assertDomainLanguage;
