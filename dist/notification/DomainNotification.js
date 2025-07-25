"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertDomainNotification = exports.isDomainNotification = exports.DomainNotificationType = void 0;
var throwAssertError_1 = require("../_helpers/lib/throwAssertError");
var isObject_1 = require("../_helpers/lib/isObject");
// IN - действие того кто получил уведомление
// OUT - действие кого-то другого
var DomainNotificationType;
(function (DomainNotificationType) {
    // Common
    DomainNotificationType["ERROR"] = "err";
    DomainNotificationType["UNKNOWN"] = "unk";
    DomainNotificationType["CONNECTED"] = "con";
    DomainNotificationType["CONNECTING"] = "cong";
    DomainNotificationType["DISCONNECTED"] = "dis";
    DomainNotificationType["TOKENS_UPDATE"] = "tkn";
    DomainNotificationType["PASSWORD_UPDATE"] = "pas";
    DomainNotificationType["NOTIFICATIONS_UPDATE"] = "not";
    DomainNotificationType["NOTIFICATIONS_STATE_UPDATE"] = "not_s";
    // User
    DomainNotificationType["USER_AVATAR_UPDATE_IN"] = "u_ava_u_in";
    DomainNotificationType["USER_AVATAR_UPDATE_OUT"] = "u_ava_u_out";
    DomainNotificationType["USER_LOGIN_UPDATE_IN"] = "u_log_u_in";
    DomainNotificationType["USER_LOGIN_UPDATE_OUT"] = "u_log_u_out";
    DomainNotificationType["USER_CONTACTS_UPDATE_IN"] = "u_con_u_in";
    DomainNotificationType["USER_CONTACTS_UPDATE_OUT"] = "u_con_u_out";
    DomainNotificationType["USER_BACKGROUND_UPDATE_IN"] = "u_bac_u_in";
    DomainNotificationType["USER_BACKGROUND_UPDATE_OUT"] = "u_bac_u_out";
    DomainNotificationType["USER_PERMISSIONS_UPDATE_IN"] = "u_per_u_in";
    DomainNotificationType["USER_PERMISSIONS_UPDATE_OUT"] = "u_per_u_out";
    // User message
    DomainNotificationType["USER_MESSAGE_IN"] = "u_msg_in";
    DomainNotificationType["USER_MESSAGE_OUT"] = "u_msg_out";
    DomainNotificationType["USER_MESSAGE_DELETED_IN"] = "u_msg_d_in";
    DomainNotificationType["USER_MESSAGE_DELETED_OUT"] = "u_msg_d_out";
    DomainNotificationType["USER_MESSAGE_REDACTED_IN"] = "u_msg_r_in";
    DomainNotificationType["USER_MESSAGE_REDACTED_OUT"] = "u_msg_r_out";
    DomainNotificationType["USER_MESSAGE_READ_IN"] = "u_msg_read_in";
    DomainNotificationType["USER_MESSAGE_READ_OUT"] = "u_msg_read_out";
    // Private message
    DomainNotificationType["PRIVATE_MESSAGE_IN"] = "p_msg_in";
    DomainNotificationType["PRIVATE_MESSAGE_OUT"] = "p_msg_out";
    DomainNotificationType["PRIVATE_MESSAGE_DELETED_IN"] = "p_msg_d_in";
    DomainNotificationType["PRIVATE_MESSAGE_DELETED_OUT"] = "p_msg_d_out";
    DomainNotificationType["PRIVATE_MESSAGE_REDACTED_IN"] = "p_msg_r_in";
    DomainNotificationType["PRIVATE_MESSAGE_REDACTED_OUT"] = "p_msg_r_out";
    DomainNotificationType["PRIVATE_MESSAGE_READ_IN"] = "p_msg_read_in";
    DomainNotificationType["PRIVATE_MESSAGE_READ_OUT"] = "p_msg_read_out";
    DomainNotificationType["PRIVATE_MESSAGE_READ_ALL_IN"] = "p_msg_read_all_in";
    DomainNotificationType["PRIVATE_MESSAGE_READ_ALL_OUT"] = "p_msg_read_all_out";
    // Friend request
    DomainNotificationType["FRIEND_REQUEST_IN"] = "fr_r_in";
    DomainNotificationType["FRIEND_REQUEST_OUT"] = "fr_r_out";
    DomainNotificationType["FRIEND_DELETED_IN"] = "fr_d_in";
    DomainNotificationType["FRIEND_DELETED_OUT"] = "fr_d_out";
    DomainNotificationType["FRIEND_REQUEST_ACCEPTED_IN"] = "fr_ra_in";
    DomainNotificationType["FRIEND_REQUEST_ACCEPTED_OUT"] = "fr_ra_out";
    DomainNotificationType["FRIEND_REQUEST_CANCELED_IN"] = "fr_rc_in";
    DomainNotificationType["FRIEND_REQUEST_CANCELED_OUT"] = "fr_rc_out";
    // Dialogue
    DomainNotificationType["DIALOGUE_CREATED_IN"] = "dlg_c_in";
    DomainNotificationType["DIALOGUE_CREATED_OUT"] = "dlg_c_out";
    DomainNotificationType["DIALOGUE_UPDATED_IN"] = "dlg_u_in";
    DomainNotificationType["DIALOGUE_UPDATED_OUT"] = "dlg_u_out";
    DomainNotificationType["DIALOGUE_DELETED_IN"] = "dlg_d_in";
    DomainNotificationType["DIALOGUE_DELETED_OUT"] = "dlg_d_out";
    DomainNotificationType["DIALOGUE_ARCHIVED_IN"] = "dlg_a_in";
    DomainNotificationType["DIALOGUE_ARCHIVED_OUT"] = "dlg_a_out";
    // Private dialogue
    DomainNotificationType["PRIVATE_DIALOGUE_CREATED_IN"] = "pdlg_c_in";
    DomainNotificationType["PRIVATE_DIALOGUE_CREATED_OUT"] = "pdlg_c_out";
    DomainNotificationType["PRIVATE_DIALOGUE_UPDATED_IN"] = "pdlg_u_in";
    DomainNotificationType["PRIVATE_DIALOGUE_UPDATED_OUT"] = "pdlg_u_out";
    DomainNotificationType["PRIVATE_DIALOGUE_DELETED_IN"] = "pdlg_d_in";
    DomainNotificationType["PRIVATE_DIALOGUE_DELETED_OUT"] = "pdlg_d_out";
    DomainNotificationType["PRIVATE_DIALOGUE_UNDELETED_IN"] = "pdlg_du_in";
    DomainNotificationType["PRIVATE_DIALOGUE_UNDELETED_OUT"] = "pdlg_du_out";
    DomainNotificationType["PRIVATE_DIALOGUE_ARCHIVED_IN"] = "pdlg_a_in";
    DomainNotificationType["PRIVATE_DIALOGUE_ARCHIVED_OUT"] = "pdlg_a_out";
    DomainNotificationType["PRIVATE_DIALOGUE_UNARCHIVED_IN"] = "pdlg_au_in";
    DomainNotificationType["PRIVATE_DIALOGUE_UNARCHIVED_OUT"] = "pdlg_au_out";
    // Post
    DomainNotificationType["POST_CREATED_IN"] = "pt_c_in";
    DomainNotificationType["POST_CREATED_OUT"] = "pt_c_out";
    DomainNotificationType["POST_UPDATED_IN"] = "pt_u_in";
    DomainNotificationType["POST_UPDATED_OUT"] = "pt_u_out";
    DomainNotificationType["POST_DELETED_IN"] = "pt_d_in";
    DomainNotificationType["POST_DELETED_OUT"] = "pt_d_out";
    DomainNotificationType["POST_LIKED_IN"] = "pt_lk_in";
    DomainNotificationType["POST_LIKED_OUT"] = "pt_lk_out";
    DomainNotificationType["POST_UNLIKED_IN"] = "pt_ulk_in";
    DomainNotificationType["POST_UNLIKED_OUT"] = "pt_ulk_out";
    // Post comment
    DomainNotificationType["POST_COMMENT_CREATED_IN"] = "pt_com_c_in";
    DomainNotificationType["POST_COMMENT_CREATED_OUT"] = "pt_com_c_out";
    DomainNotificationType["POST_COMMENT_UPDATED_IN"] = "pt_com_u_in";
    DomainNotificationType["POST_COMMENT_UPDATED_OUT"] = "pt_com_u_out";
    DomainNotificationType["POST_COMMENT_DELETED_IN"] = "pt_com_d_in";
    DomainNotificationType["POST_COMMENT_DELETED_OUT"] = "pt_com_d_out";
    DomainNotificationType["POST_COMMENT_LIKED_IN"] = "pt_com_lk_in";
    DomainNotificationType["POST_COMMENT_LIKED_OUT"] = "pt_com_lk_out";
    DomainNotificationType["POST_COMMENT_UNLIKED_IN"] = "pt_com_ulk_in";
    DomainNotificationType["POST_COMMENT_UNLIKED_OUT"] = "pt_com_ulk_out";
    DomainNotificationType["POST_COMMENT_REPLY_CREATED_IN"] = "pt_comr_c_in";
    DomainNotificationType["POST_COMMENT_REPLY_CREATED_OUT"] = "pt_comr_c_out";
    DomainNotificationType["POST_COMMENT_REPLY_UPDATED_IN"] = "pt_comr_u_in";
    DomainNotificationType["POST_COMMENT_REPLY_UPDATED_OUT"] = "pt_comr_u_out";
    DomainNotificationType["POST_COMMENT_REPLY_DELETED_IN"] = "pt_comr_d_in";
    DomainNotificationType["POST_COMMENT_REPLY_DELETED_OUT"] = "pt_comr_d_out";
    // File
    DomainNotificationType["FILE_UPLOADED_IN"] = "fl_u_in";
    DomainNotificationType["FILE_UPLOADED_OUT"] = "fl_u_out";
    DomainNotificationType["FILE_UPDATED_IN"] = "fl_upd_in";
    DomainNotificationType["FILE_UPDATED_OUT"] = "fl_upd_out";
    DomainNotificationType["FILE_DELETED_IN"] = "fl_d_in";
    DomainNotificationType["FILE_DELETED_OUT"] = "fl_d_out";
    // Language
    DomainNotificationType["LANGUAGE_CREATED_IN"] = "lg_c_in";
    DomainNotificationType["LANGUAGE_CREATED_OUT"] = "lg_c_out";
    DomainNotificationType["LANGUAGE_UPDATED_IN"] = "lg_u_in";
    DomainNotificationType["LANGUAGE_UPDATED_OUT"] = "lg_u_out";
    DomainNotificationType["LANGUAGE_DELETED_IN"] = "lg_d_in";
    DomainNotificationType["LANGUAGE_DELETED_OUT"] = "lg_d_out";
    // Language folder
    DomainNotificationType["LANGUAGE_FOLDER_CREATED_IN"] = "lgf_c_in";
    DomainNotificationType["LANGUAGE_FOLDER_CREATED_OUT"] = "lgf_c_out";
    DomainNotificationType["LANGUAGE_FOLDER_UPDATED_IN"] = "lgf_u_in";
    DomainNotificationType["LANGUAGE_FOLDER_UPDATED_OUT"] = "lgf_u_out";
    DomainNotificationType["LANGUAGE_FOLDER_DELETED_IN"] = "lgf_d_in";
    DomainNotificationType["LANGUAGE_FOLDER_DELETED_OUT"] = "lgf_d_out";
    // Language word
    DomainNotificationType["LANGUAGE_WORD_CREATED_IN"] = "lgw_c_in";
    DomainNotificationType["LANGUAGE_WORD_CREATED_OUT"] = "lgw_c_out";
    DomainNotificationType["LANGUAGE_WORD_UPDATED_IN"] = "lgw_u_in";
    DomainNotificationType["LANGUAGE_WORD_UPDATED_OUT"] = "lgw_u_out";
    DomainNotificationType["LANGUAGE_WORD_DELETED_IN"] = "lgw_d_in";
    DomainNotificationType["LANGUAGE_WORD_DELETED_OUT"] = "lgw_d_out";
    // Call
    DomainNotificationType["CALL_OFFER_IN"] = "ca_o_in";
    DomainNotificationType["CALL_OFFER_OUT"] = "ca_o_out";
    DomainNotificationType["CALL_ANSWER_IN"] = "ca_a_in";
    DomainNotificationType["CALL_ANSWER_OUT"] = "ca_a_out";
    DomainNotificationType["CALL_START_IN"] = "ca_s_in";
    DomainNotificationType["CALL_START_OUT"] = "ca_s_out";
    DomainNotificationType["CALL_FINISH_IN"] = "ca_f_in";
    DomainNotificationType["CALL_FINISH_OUT"] = "ca_f_out";
})(DomainNotificationType || (exports.DomainNotificationType = DomainNotificationType = {}));
var isDomainNotification = function (data) {
    if (!(0, isObject_1.isObject)(data)) {
        return false;
    }
    if (typeof data['data'] === 'undefined' ||
        typeof data['id'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        typeof data['viewed'] !== 'boolean' ||
        typeof data['creationDate'] !== 'number') {
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
