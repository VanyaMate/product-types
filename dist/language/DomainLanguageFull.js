"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainLanguageFull = exports.isDomainLanguageFull = void 0;
var DomainLanguage_1 = require("./DomainLanguage");
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var DomainLanguageFolderFull_1 = require("./DomainLanguageFolderFull");
var isDomainLanguageFull = function (data) {
    if (!(0, DomainLanguage_1.isDomainLanguage)(data)) {
        return false;
    }
    if (!Array.isArray(data['folders']) ||
        !data['folders'].every(DomainLanguageFolderFull_1.isDomainLanguageFolderFull)) {
        return false;
    }
    return true;
};
exports.isDomainLanguageFull = isDomainLanguageFull;
var assertDomainLanguageFull = function (data, variableName, typeName) {
    if (!(0, exports.isDomainLanguageFull)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainLanguageFull = assertDomainLanguageFull;
