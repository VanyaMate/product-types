"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserAvatarUpdateData = exports.isDomainNotificationUserAvatarUpdateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationUserAvatarUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['newUser']) ||
        !(0, DomainUser_1.isDomainUser)(data['oldUser'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserAvatarUpdateData = isDomainNotificationUserAvatarUpdateData;
var assertDomainNotificationUserAvatarUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserAvatarUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserAvatarUpdateData = assertDomainNotificationUserAvatarUpdateData;
