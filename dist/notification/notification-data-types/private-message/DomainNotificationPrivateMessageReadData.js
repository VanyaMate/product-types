"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateMessageReadData = exports.isDomainNotificationPrivateMessageReadData = void 0;
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var DomainPrivateDialogueWithUser_1 = require("../../../private-dialogue/DomainPrivateDialogueWithUser");
var DomainMessage_1 = require("../../../message/DomainMessage");
var isDomainNotificationPrivateMessageReadData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue']) ||
        !(0, DomainMessage_1.isDomainMessage)(data['message'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateMessageReadData = isDomainNotificationPrivateMessageReadData;
var assertDomainNotificationPrivateMessageReadData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateMessageReadData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateMessageReadData = assertDomainNotificationPrivateMessageReadData;
