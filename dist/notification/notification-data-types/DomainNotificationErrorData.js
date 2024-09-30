"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationErrorData = exports.isDomainNotificationErrorData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isObject_1 = require("../../_helpers/lib/isObject");
var DomainSimpleError_1 = require("../../error/DomainSimpleError");
var isDomainNotificationErrorData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainSimpleError_1.isDomainSimpleError)(data['error'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationErrorData = isDomainNotificationErrorData;
var assertDomainNotificationErrorData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationErrorData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationErrorData = assertDomainNotificationErrorData;
