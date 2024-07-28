"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageUpdateData = exports.isDomainLanguageUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguageUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['title'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainLanguageUpdateData = isDomainLanguageUpdateData;
var assertDomainLanguageUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageUpdateData = assertDomainLanguageUpdateData;
