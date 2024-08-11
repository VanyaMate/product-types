"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserMessageData = exports.isDomainNotificationUserMessageData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainMessage_1 = require("../../../message/DomainMessage");
var DomainPrivateDialogue_1 = require("../../../private-dialogue/DomainPrivateDialogue");
var isDomainNotificationUserMessageData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainMessage_1.isDomainMessage)(data['message']) ||
        !(0, DomainPrivateDialogue_1.isDomainPrivateDialogue)(data['dialogue'])) {
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
