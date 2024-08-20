"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationCallFinishData = exports.isDomainNotificationCallFinishData = void 0;
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainCall_1 = require("../../../call/DomainCall");
var isDomainNotificationCallFinishData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
        !(0, DomainCall_1.isDomainCall)(data['call'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationCallFinishData = isDomainNotificationCallFinishData;
var assertDomainNotificationCallFinishData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationCallFinishData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationCallFinishData = assertDomainNotificationCallFinishData;
