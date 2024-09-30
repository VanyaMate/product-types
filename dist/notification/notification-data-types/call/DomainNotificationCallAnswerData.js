"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationCallAnswerData = exports.isDomainNotificationCallAnswerData = void 0;
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainCallAnswer_1 = require("../../../call/DomainCallAnswer");
var DomainCall_1 = require("../../../call/DomainCall");
var isDomainNotificationCallAnswerData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainCall_1.isDomainCall)(data['call']) ||
        !(0, DomainCallAnswer_1.isDomainCallAnswer)(data['answer'])) {
        return false;
    }
    return true;
};
exports.isDomainNotificationCallAnswerData = isDomainNotificationCallAnswerData;
var assertDomainNotificationCallAnswerData = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotificationCallAnswerData)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotificationCallAnswerData = assertDomainNotificationCallAnswerData;
