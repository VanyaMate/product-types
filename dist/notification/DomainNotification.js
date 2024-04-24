"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotification = exports.isDomainNotification = exports.NotificationType = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var NotificationType;
(function (NotificationType) {
    NotificationType["CONNECTED"] = "con";
    NotificationType["DISCONNECTED"] = "dis";
    NotificationType["TOKENS_UPDATE"] = "tkn";
    NotificationType["MESSAGE"] = "msg";
    NotificationType["MESSAGE_DELETED"] = "msg_d";
    NotificationType["MESSAGE_REDACTED"] = "msg_r";
    NotificationType["FRIEND_REQUEST"] = "fr_r";
    NotificationType["FRIEND_REQUEST_ACCEPTED"] = "fr_ra";
    NotificationType["FRIEND_REQUEST_CANCELED"] = "fr_rc";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var isDomainNotification = function (data) {
    if (typeof data !== 'object') {
        return false;
    }
    if (typeof data['dateMs'] !== 'number' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] !== 'string') {
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
