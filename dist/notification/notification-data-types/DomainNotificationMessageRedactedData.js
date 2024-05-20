"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationMessageRedactedData = exports.isDomainNotificationMessageRedactedData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationMessageRedactedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['previousMessage'] !== 'string' ||
        typeof data['newMessage'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['where'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationMessageRedactedData = isDomainNotificationMessageRedactedData;
var assertDomainNotificationMessageRedactedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationMessageRedactedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationMessageRedactedData = assertDomainNotificationMessageRedactedData;
