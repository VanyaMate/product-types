"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserMessageRedactedData = exports.isDomainNotificationUserMessageRedactedData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationUserMessageRedactedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['previousMessage'] !== 'string' ||
        typeof data['newMessage'] !== 'string' ||
        typeof data['messageIndex'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserMessageRedactedData = isDomainNotificationUserMessageRedactedData;
var assertDomainNotificationUserMessageRedactedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserMessageRedactedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserMessageRedactedData = assertDomainNotificationUserMessageRedactedData;
