"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateMessageData = exports.isDomainNotificationPrivateMessageData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainMessage_1 = require("../../../message/DomainMessage");
var DomainPrivateDialogueWithUser_1 = require("../../../private-dialogue/DomainPrivateDialogueWithUser");
var isDomainNotificationPrivateMessageData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainMessage_1.isDomainMessage)(data['message']) ||
        !(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateMessageData = isDomainNotificationPrivateMessageData;
var assertDomainNotificationPrivateMessageData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateMessageData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateMessageData = assertDomainNotificationPrivateMessageData;
