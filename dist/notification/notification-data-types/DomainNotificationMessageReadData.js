"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationMessageReadData = exports.isDomainNotificationMessageReadData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainNotificationMessageReadData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['messageIndex'] !== 'number' ||
        !(0, DomainUser_1.isDomainUser)(data['where'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationMessageReadData = isDomainNotificationMessageReadData;
var assertDomainNotificationMessageReadData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationMessageReadData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationMessageReadData = assertDomainNotificationMessageReadData;
