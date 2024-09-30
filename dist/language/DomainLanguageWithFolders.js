"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageWithFolders = exports.isDomainLanguageWithFolders = void 0;
var DomainLanguage_1 = require("./DomainLanguage");
var DomainLanguageFolder_1 = require("./DomainLanguageFolder");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isArray_1 = require("../_helpers/lib/isArray");
var isDomainLanguageWithFolders = function (data) {
    if (!(0, DomainLanguage_1.isDomainLanguage)(data)) {
        return false;
    }
    if (!(0, isArray_1.isArray)(data['folders'], DomainLanguageFolder_1.isDomainLanguageFolder)) {
        return false;
    }
    return true;
};
exports.isDomainLanguageWithFolders = isDomainLanguageWithFolders;
var assertDomainLanguageWithFolders = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageWithFolders)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageWithFolders = assertDomainLanguageWithFolders;
