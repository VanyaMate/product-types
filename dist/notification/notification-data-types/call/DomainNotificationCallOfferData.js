"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationCallOfferData = exports.isDomainNotificationCallOfferData = void 0;
var DomainCallOffer_1 = require("../../../call/DomainCallOffer");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainCall_1 = require("../../../call/DomainCall");
var isDomainNotificationCallOfferData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainCallOffer_1.isDomainCallOffer)(data['offer']) ||
        !(0, DomainCall_1.isDomainCall)(data['call'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationCallOfferData = isDomainNotificationCallOfferData;
var assertDomainNotificationCallOfferData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationCallOfferData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationCallOfferData = assertDomainNotificationCallOfferData;
