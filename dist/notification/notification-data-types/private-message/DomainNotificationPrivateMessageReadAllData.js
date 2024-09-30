"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateMessageReadAllData = exports.isDomainNotificationPrivateMessageReadAllData = void 0;
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../../_helpers/lib/isObject");
var DomainPrivateDialogueWithUser_1 = require("../../../private-dialogue/DomainPrivateDialogueWithUser");
var isDomainNotificationPrivateMessageReadAllData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateMessageReadAllData = isDomainNotificationPrivateMessageReadAllData;
var assertDomainNotificationPrivateMessageReadAllData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateMessageReadAllData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateMessageReadAllData = assertDomainNotificationPrivateMessageReadAllData;
