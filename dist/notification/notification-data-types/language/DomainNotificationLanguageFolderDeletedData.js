"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationLanguageFolderDeletedData = exports.isDomainNotificationLanguageFolderDeletedData = void 0;
var DomainLanguageFolder_1 = require("../../../language/DomainLanguageFolder");
var DomainLanguage_1 = require("../../../language/DomainLanguage");
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationLanguageFolderDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainLanguageFolder_1.isDomainLanguageFolder)(data['folder']) ||
        !(0, DomainLanguage_1.isDomainLanguage)(data['language']) ||
        !(0, DomainUser_1.isDomainUser)(data['owner'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationLanguageFolderDeletedData = isDomainNotificationLanguageFolderDeletedData;
var assertDomainNotificationLanguageFolderDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationLanguageFolderDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationLanguageFolderDeletedData = assertDomainNotificationLanguageFolderDeletedData;
