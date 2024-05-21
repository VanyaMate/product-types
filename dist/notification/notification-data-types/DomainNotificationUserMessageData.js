"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserMessageData = exports.isDomainNotificationUserMessageData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationUserMessageData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserMessageData = isDomainNotificationUserMessageData;
var assertDomainNotificationUserMessageData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserMessageData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserMessageData = assertDomainNotificationUserMessageData;
