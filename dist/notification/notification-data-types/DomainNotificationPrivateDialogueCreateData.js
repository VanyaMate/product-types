"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPrivateDialogueCreateData = exports.isDomainNotificationPrivateDialogueCreateData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainPrivateDialogueFull_1 = require("../../private-dialogue/DomainPrivateDialogueFull");
var isDomainNotificationPrivateDialogueCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPrivateDialogueFull_1.isDomainPrivateDialogueFull)(data['dialogue'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPrivateDialogueCreateData = isDomainNotificationPrivateDialogueCreateData;
var assertDomainNotificationPrivateDialogueCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPrivateDialogueCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPrivateDialogueCreateData = assertDomainNotificationPrivateDialogueCreateData;
