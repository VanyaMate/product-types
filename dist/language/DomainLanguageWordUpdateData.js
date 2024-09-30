"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageWordUpdateData = exports.isDomainLanguageWordUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isOptional_1 = require("../_helpers/lib/isOptional");
var isDomainLanguageWordUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, isOptional_1.isOptional)(data['original'], 'string') ||
        !(0, isOptional_1.isOptional)(data['notice'], 'string') ||
        !(0, isOptional_1.isOptional)(data['translations'], 'string', true) ||
        !(0, isOptional_1.isOptional)(data['checked'], 'boolean')) {
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
