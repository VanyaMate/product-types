"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageWordUpdateData = exports.isDomainLanguageWordUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguageWordUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['original'] !== 'string' ||
        typeof data['notice'] !== 'string' ||
        !Array.isArray(data['translations']) ||
        !data['translations'].length ||
        !data['translations'].every(function (word) { return typeof word === 'string'; })) {
        return false;
    }
    return true;
};
exports.isDomainLanguageWordUpdateData = isDomainLanguageWordUpdateData;
var assertDomainLanguageWordUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageWordUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageWordUpdateData = assertDomainLanguageWordUpdateData;
