"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotification = exports.isDomainNotification = exports.DomainNotificationType = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
// IN - получатель
// OUT - не получатель
var DomainNotificationType;
(function (DomainNotificationType) {
    DomainNotificationType["ERROR"] = "err";
    DomainNotificationType["UNKNOWN"] = "unk";
    DomainNotificationType["CONNECTED"] = "con";
    DomainNotificationType["CONNECTING"] = "cong";
    DomainNotificationType["DISCONNECTED"] = "dis";
    DomainNotificationType["TOKENS_UPDATE"] = "tkn";
    DomainNotificationType["USER_MESSAGE_IN"] = "u_msg_in";
    DomainNotificationType["USER_MESSAGE_OUT"] = "u_msg_out";
    DomainNotificationType["USER_MESSAGE_DELETED_IN"] = "u_msg_d_in";
    DomainNotificationType["USER_MESSAGE_DELETED_OUT"] = "u_msg_d_out";
    DomainNotificationType["USER_MESSAGE_REDACTED_IN"] = "u_msg_r_in";
    DomainNotificationType["USER_MESSAGE_REDACTED_OUT"] = "u_msg_r_out";
    DomainNotificationType["USER_MESSAGE_READ_IN"] = "u_msg_read_in";
    DomainNotificationType["USER_MESSAGE_READ_OUT"] = "u_msg_read_out";
    DomainNotificationType["FRIEND_REQUEST_IN"] = "fr_r_in";
    DomainNotificationType["FRIEND_REQUEST_OUT"] = "fr_r_out";
    DomainNotificationType["FRIEND_DELETED_IN"] = "fr_d_in";
    DomainNotificationType["FRIEND_DELETED_OUT"] = "fr_d_out";
    DomainNotificationType["FRIEND_REQUEST_ACCEPTED_IN"] = "fr_ra_in";
    DomainNotificationType["FRIEND_REQUEST_ACCEPTED_OUT"] = "fr_ra_out";
    DomainNotificationType["FRIEND_REQUEST_CANCELED_IN"] = "fr_rc_in";
    DomainNotificationType["FRIEND_REQUEST_CANCELED_OUT"] = "fr_rc_out";
    DomainNotificationType["DIALOGUE_CREATED_IN"] = "dlg_c_in";
    DomainNotificationType["DIALOGUE_CREATED_OUT"] = "dlg_c_out";
    DomainNotificationType["DIALOGUE_UPDATED_IN"] = "dlg_u_in";
    DomainNotificationType["DIALOGUE_UPDATED_OUT"] = "dlg_u_out";
    DomainNotificationType["DIALOGUE_DELETED_IN"] = "dlg_d_in";
    DomainNotificationType["DIALOGUE_DELETED_OUT"] = "dlg_d_out";
    DomainNotificationType["DIALOGUE_ARCHIVED_IN"] = "dlg_a_in";
    DomainNotificationType["DIALOGUE_ARCHIVED_OUT"] = "dlg_a_out";
    DomainNotificationType["PRIVATE_DIALOGUE_CREATED_IN"] = "pdlg_c_in";
    DomainNotificationType["PRIVATE_DIALOGUE_CREATED_OUT"] = "pdlg_c_out";
    DomainNotificationType["PRIVATE_DIALOGUE_UPDATED_IN"] = "pdlg_u_in";
    DomainNotificationType["PRIVATE_DIALOGUE_UPDATED_OUT"] = "pdlg_u_out";
    DomainNotificationType["PRIVATE_DIALOGUE_DELETED_IN"] = "pdlg_d_in";
    DomainNotificationType["PRIVATE_DIALOGUE_DELETED_OUT"] = "pdlg_d_out";
    DomainNotificationType["PRIVATE_DIALOGUE_ARCHIVED_IN"] = "pdlg_a_in";
    DomainNotificationType["PRIVATE_DIALOGUE_ARCHIVED_OUT"] = "pdlg_a_out";
})(DomainNotificationType || (exports.DomainNotificationType = DomainNotificationType = {}));
var isDomainNotification = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['data'] === 'undefined' ||
        typeof data['id'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        typeof data['viewed'] !== 'boolean' ||
        !(typeof data['creationDate'] === 'string' ||
            ((0, isObject_1.isObject)(data['creationDate']) &&
                typeof data['creationDate']['toUTCString'] === 'function'))) {
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
