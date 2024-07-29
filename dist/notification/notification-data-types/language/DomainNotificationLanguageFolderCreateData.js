"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationLanguageFolderCreateData = exports.isDomainNotificationLanguageFolderCreateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainLanguageFolder_1 = require("../../../language/DomainLanguageFolder");
var DomainLanguage_1 = require("../../../language/DomainLanguage");
var isDomainNotificationLanguageFolderCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainLanguageFolder_1.isDomainLanguageFolder)(data['folder']) ||
        !(0, DomainLanguage_1.isDomainLanguage)(data['language'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationLanguageFolderCreateData = isDomainNotificationLanguageFolderCreateData;
var assertDomainNotificationLanguageFolderCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationLanguageFolderCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationLanguageFolderCreateData = assertDomainNotificationLanguageFolderCreateData;
