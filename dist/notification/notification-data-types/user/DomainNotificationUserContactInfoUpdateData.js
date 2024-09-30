"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserContactInfoUpdateData = exports.isDomainNotificationUserContactInfoUpdateData = void 0;
var DomainUserContactsInfo_1 = require("../../../user/DomainUserContactsInfo");
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationUserContactInfoUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        !(0, DomainUserContactsInfo_1.isDomainUserContactsInfo)(data['previousContacts']) ||
        !(0, DomainUserContactsInfo_1.isDomainUserContactsInfo)(data['currentContacts'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserContactInfoUpdateData = isDomainNotificationUserContactInfoUpdateData;
var assertDomainNotificationUserContactInfoUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserContactInfoUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserContactInfoUpdateData = assertDomainNotificationUserContactInfoUpdateData;
