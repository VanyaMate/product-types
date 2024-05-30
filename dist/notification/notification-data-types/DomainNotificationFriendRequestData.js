"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationFriendRequestData = exports.isDomainNotificationFriendRequestData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainFriendRequest_1 = require("../../friends/DomainFriendRequest");
var isDomainNotificationFriendRequestData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainFriendRequest_1.isDomainFriendRequest)(data['request'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationFriendRequestData = isDomainNotificationFriendRequestData;
var assertDomainNotificationFriendRequestData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationFriendRequestData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationFriendRequestData = assertDomainNotificationFriendRequestData;
