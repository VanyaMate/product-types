"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationLanguageFolderUpdateData = exports.isDomainNotificationLanguageFolderUpdateData = void 0;
var DomainLanguageFolder_1 = require("../../../language/DomainLanguageFolder");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainLanguage_1 = require("../../../language/DomainLanguage");
var isDomainNotificationLanguageFolderUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainLanguageFolder_1.isDomainLanguageFolder)(data['folder']) ||
        !(0, DomainLanguage_1.isDomainLanguage)(data['language'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationLanguageFolderUpdateData = isDomainNotificationLanguageFolderUpdateData;
var assertDomainNotificationLanguageFolderUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationLanguageFolderUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationLanguageFolderUpdateData = assertDomainNotificationLanguageFolderUpdateData;
