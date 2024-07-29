"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageWordCreateData = exports.isDomainLanguageWordCreateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isArray_1 = require("../_helpers/lib/isArray");
var isDomainLanguageWordCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['original'] !== 'string' ||
        typeof data['notice'] !== 'string' ||
        !(0, isArray_1.isArray)(data['translations'], 'string') ||
        !data['translations'].length) {
        return false;
    }
    return true;
};
exports.isDomainLanguageWordCreateData = isDomainLanguageWordCreateData;
var assertDomainLanguageWordCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageWordCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageWordCreateData = assertDomainLanguageWordCreateData;
