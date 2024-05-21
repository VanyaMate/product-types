"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationFriendDeletedData = exports.isDomainNotificationFriendDeletedData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationFriendDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        typeof data['message'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainNotificationFriendDeletedData = isDomainNotificationFriendDeletedData;
var assertDomainNotificationFriendDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationFriendDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationFriendDeletedData = assertDomainNotificationFriendDeletedData;
