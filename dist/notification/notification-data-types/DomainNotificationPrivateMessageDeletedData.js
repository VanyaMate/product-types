"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateMessageDeletedData = exports.isDomainNotificationPrivateMessageDeletedData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainPrivateDialogueWithUser_1 = require("../../private-dialogue/DomainPrivateDialogueWithUser");
var DomainMessage_1 = require("../../message/DomainMessage");
var isDomainNotificationPrivateMessageDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue']) ||
        !(0, DomainMessage_1.isDomainMessage)(data['message'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateMessageDeletedData = isDomainNotificationPrivateMessageDeletedData;
var assertDomainNotificationPrivateMessageDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateMessageDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateMessageDeletedData = assertDomainNotificationPrivateMessageDeletedData;
