"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageFolder = exports.isDomainLanguageFolder = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguageFolder = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainLanguageFolder = isDomainLanguageFolder;
var assertDomainLanguageFolder = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageFolder)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageFolder = assertDomainLanguageFolder;
