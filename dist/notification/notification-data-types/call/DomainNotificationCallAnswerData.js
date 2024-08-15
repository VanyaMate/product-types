"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotificationCallAnswerData = exports.isDomainNotificationCallAnswerData = void 0;
var DomainUser_1 = require("../../../user/DomainUser");
var isObject_1 = require("../../../_helpers/lib/isObject");
var throwAssertError_1 = require("../../../_helpers/lib/throwAssertError");
var DomainCallAnswer_1 = require("../../../call/DomainCallAnswer");
var isDomainNotificationCallAnswerData = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (!(0, DomainUser_1.isDomainUser)(data['user']) ||
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
