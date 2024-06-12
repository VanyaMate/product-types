"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserMessageReadData = exports.isDomainNotificationUserMessageReadData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainUser_1 = require("../../user/DomainUser");
var DomainPrivateDialogue_1 = require("../../private-dialogue/DomainPrivateDialogue");
var isDomainNotificationUserMessageReadData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['messageIndex'] !== 'number' ||
        !(0, DomainUser_1.isDomainUser)(data['user']) ||
        !(0, DomainPrivateDialogue_1.isDomainPrivateDialogue)(data['dialogue'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserMessageReadData = isDomainNotificationUserMessageReadData;
var assertDomainNotificationUserMessageReadData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserMessageReadData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserMessageReadData = assertDomainNotificationUserMessageReadData;
