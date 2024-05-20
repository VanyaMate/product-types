"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationMessageDeletedData = exports.isDomainNotificationMessageDeletedData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationMessageDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['message'] !== 'string' ||
        !(0, DomainUser_1.isDomainUser)(data['where'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationMessageDeletedData = isDomainNotificationMessageDeletedData;
var assertDomainNotificationMessageDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationMessageDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationMessageDeletedData = assertDomainNotificationMessageDeletedData;
