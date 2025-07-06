"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostUnlikedData = exports.isDomainNotificationPostUnlikedData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainPost_1 = require("../../../post/DomainPost");
var DomainUser_1 = require("../../../user/DomainUser");
var isDomainNotificationPostUnlikedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if ((0, DomainPost_1.isDomainPost)(data['post']) &&
        (0, DomainUser_1.isDomainUser)(data['user'])) {
        return true;
    }
    return false;
};
exports.isDomainNotificationPostUnlikedData = isDomainNotificationPostUnlikedData;
var assertDomainNotificationPostUnlikedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostUnlikedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostUnlikedData = assertDomainNotificationPostUnlikedData;
