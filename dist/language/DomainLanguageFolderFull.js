"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageFolderFull = exports.isDomainLanguageFolderFull = void 0;
var DomainLanguageFolder_1 = require("./DomainLanguageFolder");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainLanguageWord_1 = require("./DomainLanguageWord");
var isArray_1 = require("../_helpers/lib/isArray");
var isDomainLanguageFolderFull = function (data) {
    if (!(0, DomainLanguageFolder_1.isDomainLanguageFolder)(data)) {
        return false;
    }
    if (!(0, isArray_1.isArray)(data['words'], DomainLanguageWord_1.isDomainLanguageWord)) {
        return false;
    }
    return true;
};
exports.isDomainLanguageFolderFull = isDomainLanguageFolderFull;
var assertDomainLanguageFolderFull = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageFolderFull)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageFolderFull = assertDomainLanguageFolderFull;
