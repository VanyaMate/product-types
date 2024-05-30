"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationTokensUpdateData = exports.isDomainNotificationTokensUpdateData = void 0;
var throwAssertError_1 = require("../../_helpers/lib/throwAssertError");
var DomainTokens_1 = require("../../token/DomainTokens");
var isDomainNotificationTokensUpdateData = function (data) {
    return (0, DomainTokens_1.isDomainTokens)(data);
};
exports.isDomainNotificationTokensUpdateData = isDomainNotificationTokensUpdateData;
var assertDomainNotificationTokensUpdateData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationTokensUpdateData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationTokensUpdateData = assertDomainNotificationTokensUpdateData;
