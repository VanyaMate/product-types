"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateMessageRedactedData = exports.isDomainNotificationPrivateMessageRedactedData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainPrivateDialogueWithUser_1 = require("../../private-dialogue/DomainPrivateDialogueWithUser");
var DomainMessage_1 = require("../../message/DomainMessage");
var isDomainNotificationPrivateMessageRedactedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue']) ||
        !(0, DomainMessage_1.isDomainMessage)(data['previousMessage']) ||
        !(0, DomainMessage_1.isDomainMessage)(data['newMessage'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateMessageRedactedData = isDomainNotificationPrivateMessageRedactedData;
var assertDomainNotificationPrivateMessageRedactedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateMessageRedactedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateMessageRedactedData = assertDomainNotificationPrivateMessageRedactedData;
