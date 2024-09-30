"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationFriendRequestAcceptedData = exports.isDomainNotificationFriendRequestAcceptedData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationFriendRequestAcceptedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        typeof data['requestId'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainNotificationFriendRequestAcceptedData = isDomainNotificationFriendRequestAcceptedData;
var assertDomainNotificationFriendRequestAcceptedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationFriendRequestAcceptedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationFriendRequestAcceptedData = assertDomainNotificationFriendRequestAcceptedData;
