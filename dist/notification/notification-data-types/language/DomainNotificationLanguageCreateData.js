"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationLanguageCreateData = exports.isDomainNotificationLanguageCreateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainLanguage_1 = require("../../../language/DomainLanguage");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationLanguageCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainLanguage_1.isDomainLanguage)(data['language']) ||
        !(0, DomainUser_1.isDomainUser)(data['owner'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationLanguageCreateData = isDomainNotificationLanguageCreateData;
var assertDomainNotificationLanguageCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationLanguageCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationLanguageCreateData = assertDomainNotificationLanguageCreateData;
