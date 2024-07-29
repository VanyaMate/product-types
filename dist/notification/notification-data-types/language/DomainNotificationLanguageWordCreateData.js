"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationLanguageWordCreateData = exports.isDomainNotificationLanguageWordCreateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainLanguageWord_1 = require("../../../language/DomainLanguageWord");
var DomainLanguageFolder_1 = require("../../../language/DomainLanguageFolder");
var DomainLanguage_1 = require("../../../language/DomainLanguage");
var isDomainNotificationLanguageWordCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainLanguageWord_1.isDomainLanguageWord)(data['word']) ||
        !(0, DomainLanguageFolder_1.isDomainLanguageFolder)(data['folder']) ||
        !(0, DomainLanguage_1.isDomainLanguage)(data['language'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationLanguageWordCreateData = isDomainNotificationLanguageWordCreateData;
var assertDomainNotificationLanguageWordCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationLanguageWordCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationLanguageWordCreateData = assertDomainNotificationLanguageWordCreateData;
