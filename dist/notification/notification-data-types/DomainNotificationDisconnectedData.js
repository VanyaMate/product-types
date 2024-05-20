"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationDisconnectedData = exports.isDomainNotificationDisconnectedData = void 0;
var isObject_1 = require("../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var isDomainNotificationDisconnectedData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['timeMs'] !== 'number' ||
        typeof data['reason'] !== 'string') {
        return false;
    }
    return true;
};
exports.isDomainNotificationDisconnectedData = isDomainNotificationDisconnectedData;
var assertDomainNotificationDisconnectedData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationDisconnectedData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationDisconnectedData = assertDomainNotificationDisconnectedData;
