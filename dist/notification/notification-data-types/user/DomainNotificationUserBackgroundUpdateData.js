"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationUserBackgroundUpdateData = exports.isDomainNotificationUserBackgroundUpdateData = void 0;
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationUserBackgroundUpdateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        typeof data['previousBackground'] !== 'string' ||
        typeof data['currentBackground'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainNotificationUserBackgroundUpdateData = isDomainNotificationUserBackgroundUpdateData;
var assertDomainNotificationUserBackgroundUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationUserBackgroundUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationUserBackgroundUpdateData = assertDomainNotificationUserBackgroundUpdateData;
