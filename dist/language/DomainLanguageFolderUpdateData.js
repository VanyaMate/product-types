"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageFolderUpdateData = exports.isDomainLanguageFolderUpdateData = void 0;
var isObject_1 = require("../_helpers/lib/isObject");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isDomainLanguageFolderUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['title'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainLanguageFolderUpdateData = isDomainLanguageFolderUpdateData;
var assertDomainLanguageFolderUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageFolderUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageFolderUpdateData = assertDomainLanguageFolderUpdateData;
