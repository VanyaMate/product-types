"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotification = exports.isDomainNotification = exports.DomainNotificationType = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
var DomainNotificationType;
(function (DomainNotificationType) {
    DomainNotificationType["ERROR"] = "err";
    DomainNotificationType["UNKNOWN"] = "unk";
    DomainNotificationType["CONNECTED"] = "con";
    DomainNotificationType["CONNECTING"] = "cong";
    DomainNotificationType["DISCONNECTED"] = "dis";
    DomainNotificationType["TOKENS_UPDATE"] = "tkn";
    DomainNotificationType["MESSAGE"] = "msg";
    DomainNotificationType["MESSAGE_DELETED"] = "msg_d";
    DomainNotificationType["MESSAGE_REDACTED"] = "msg_r";
    DomainNotificationType["MESSAGE_READ"] = "msg_read";
    DomainNotificationType["FRIEND_REQUEST"] = "fr_r";
    DomainNotificationType["FRIEND_REQUEST_ACCEPTED"] = "fr_ra";
    DomainNotificationType["FRIEND_REQUEST_CANCELED"] = "fr_rc";
})(DomainNotificationType || (exports.DomainNotificationType = DomainNotificationType = {}));
var isDomainNotification = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['dateMs'] !== 'number' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] !== 'undefined') {
        return false;
    }
    return true;
};
exports.isDomainNotification = isDomainNotification;
var assertDomainNotification = function (data, variableName, typeName) {
    if (!(0, exports.isDomainNotification)(data)) {
        (0, throwAssertError_1.throwAssertError)(variableName, typeName);
    }
};
exports.assertDomainNotification = assertDomainNotification;
