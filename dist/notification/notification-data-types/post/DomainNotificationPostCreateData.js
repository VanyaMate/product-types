"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationPostCreateData = exports.isDomainNotificationPostCreateData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainPost_1 = require("../../../post/DomainPost");
var isDomainNotificationPostCreateData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainPost_1.isDomainPost)(data['post'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationPostCreateData = isDomainNotificationPostCreateData;
var assertDomainNotificationPostCreateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationPostCreateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationPostCreateData = assertDomainNotificationPostCreateData;
