"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateDialogueUpdatedData = exports.isDomainNotificationPrivateDialogueUpdatedData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainPrivateDialogueWithUser_1 = require("../../private-dialogue/DomainPrivateDialogueWithUser");
var isDomainNotificationPrivateDialogueUpdatedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['dialogue']) ||
        !(0, DomainPrivateDialogueWithUser_1.isDomainPrivateDialogueWithUser)(data['previous'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateDialogueUpdatedData = isDomainNotificationPrivateDialogueUpdatedData;
var assertDomainNotificationPrivateDialogueUpdatedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateDialogueUpdatedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateDialogueUpdatedData = assertDomainNotificationPrivateDialogueUpdatedData;
