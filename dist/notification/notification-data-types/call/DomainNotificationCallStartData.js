"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationCallStartData = exports.isDomainNotificationCallStartData = void 0;
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationCallStartData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationCallStartData = isDomainNotificationCallStartData;
var assertDomainNotificationCallStartData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationCallStartData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationCallStartData = assertDomainNotificationCallStartData;
