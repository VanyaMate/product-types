"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserLoginUpdateData = exports.isDomainNotificationUserLoginUpdateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationUserLoginUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserLoginUpdateData = isDomainNotificationUserLoginUpdateData;
var assertDomainNotificationUserLoginUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserLoginUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserLoginUpdateData = assertDomainNotificationUserLoginUpdateData;
