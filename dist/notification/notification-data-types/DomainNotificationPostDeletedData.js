"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostDeletedData = exports.isDomainNotificationPostDeletedData = void 0;
var DomainPost_1 = require("../../post/DomainPost");
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainNotificationPostDeletedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPost_1.isDomainPost)(data['post'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPostDeletedData = isDomainNotificationPostDeletedData;
var assertDomainNotificationPostDeletedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostDeletedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostDeletedData = assertDomainNotificationPostDeletedData;
