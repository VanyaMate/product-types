"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserMessageDeletedData = exports.isDomainNotificationUserMessageDeletedData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainUser_1 = require("../../user/DomainUser");
var DomainPrivateDialogue_1 = require("../../private-dialogue/DomainPrivateDialogue");
var isDomainNotificationUserMessageDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string' ||
        typeof data['messageIndex'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['user']) ||
        !(0, DomainPrivateDialogue_1.isDomainPrivateDialogue)(data['dialogue'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserMessageDeletedData = isDomainNotificationUserMessageDeletedData;
var assertDomainNotificationUserMessageDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserMessageDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserMessageDeletedData = assertDomainNotificationUserMessageDeletedData;
