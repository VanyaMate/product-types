"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationStateUpdateData = exports.isDomainNotificationStateUpdateData = void 0;
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var isDomainNotificationStateUpdateData = function (data) {
    return typeof data === 'boolean';
};
exports.isDomainNotificationStateUpdateData = isDomainNotificationStateUpdateData;
var assertDomainNotificationStateUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationStateUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationStateUpdateData = assertDomainNotificationStateUpdateData;
