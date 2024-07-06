"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostUpdatedData = exports.isDomainNotificationPostUpdatedData = void 0;
var DomainPost_1 = require("../../post/DomainPost");
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainNotificationPostUpdatedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPost_1.isDomainPost)(data['previousPost']) ||
        !(0, DomainPost_1.isDomainPost)(data['newPost'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPostUpdatedData = isDomainNotificationPostUpdatedData;
var assertDomainNotificationPostUpdatedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostUpdatedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostUpdatedData = assertDomainNotificationPostUpdatedData;
