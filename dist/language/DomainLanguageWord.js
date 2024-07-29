"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageWord = exports.isDomainLanguageWord = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isArray_1 = require("../_helpers/lib/isArray");
var isDomainLanguageWord = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['original'] !== 'string' ||
        typeof data['notice'] !== 'string' ||
        typeof data['checked'] !== 'boolean' ||
        !(0, isArray_1.isArray)(data['translations'], 'string')) {
        return false;
    }
    return true;
};
exports.isDomainLanguageWord = isDomainLanguageWord;
var assertDomainLanguageWord = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageWord)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageWord = assertDomainLanguageWord;
