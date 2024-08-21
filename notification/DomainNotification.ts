import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


// IN - действие того кто получил уведомление
// OUT - действие кого-то другого
export enum DomainNotificationType {
    // Common
    ERROR                           = 'err',
    UNKNOWN                         = 'unk',
    CONNECTED                       = 'con',
    CONNECTING                      = 'cong',
    DISCONNECTED                    = 'dis',
    TOKENS_UPDATE                   = 'tkn',
    PASSWORD_UPDATE                 = 'pas',
    NOTIFICATIONS_UPDATE            = 'not',    // TODO: Сделать тип
    NOTIFICATIONS_STATE_UPDATE      = 'not_s',

    // User
    USER_AVATAR_UPDATE_IN           = 'u_ava_u_in',
    USER_AVATAR_UPDATE_OUT          = 'u_ava_u_out',
    USER_LOGIN_UPDATE_IN            = 'u_log_u_in',
    USER_LOGIN_UPDATE_OUT           = 'u_log_u_out',
    USER_CONTACTS_UPDATE_IN         = 'u_con_u_in',
    USER_CONTACTS_UPDATE_OUT        = 'u_con_u_out',
    USER_BACKGROUND_UPDATE_IN       = 'u_bac_u_in',
    USER_BACKGROUND_UPDATE_OUT      = 'u_bac_u_out',
    USER_PERMISSIONS_UPDATE_IN      = 'u_per_u_in',
    USER_PERMISSIONS_UPDATE_OUT     = 'u_per_u_out',

    // User message
    USER_MESSAGE_IN                 = 'u_msg_in',
    USER_MESSAGE_OUT                = 'u_msg_out',
    USER_MESSAGE_DELETED_IN         = 'u_msg_d_in',
    USER_MESSAGE_DELETED_OUT        = 'u_msg_d_out',
    USER_MESSAGE_REDACTED_IN        = 'u_msg_r_in',
    USER_MESSAGE_REDACTED_OUT       = 'u_msg_r_out',
    USER_MESSAGE_READ_IN            = 'u_msg_read_in',
    USER_MESSAGE_READ_OUT           = 'u_msg_read_out',

    // Private message
    PRIVATE_MESSAGE_IN              = 'p_msg_in',
    PRIVATE_MESSAGE_OUT             = 'p_msg_out',
    PRIVATE_MESSAGE_DELETED_IN      = 'p_msg_d_in',
    PRIVATE_MESSAGE_DELETED_OUT     = 'p_msg_d_out',
    PRIVATE_MESSAGE_REDACTED_IN     = 'p_msg_r_in',
    PRIVATE_MESSAGE_REDACTED_OUT    = 'p_msg_r_out',
    PRIVATE_MESSAGE_READ_IN         = 'p_msg_read_in',
    PRIVATE_MESSAGE_READ_OUT        = 'p_msg_read_out',
    PRIVATE_MESSAGE_READ_ALL_IN     = 'p_msg_read_all_in',
    PRIVATE_MESSAGE_READ_ALL_OUT    = 'p_msg_read_all_out',

    // Friend request
    FRIEND_REQUEST_IN               = 'fr_r_in',
    FRIEND_REQUEST_OUT              = 'fr_r_out',
    FRIEND_DELETED_IN               = 'fr_d_in',
    FRIEND_DELETED_OUT              = 'fr_d_out',
    FRIEND_REQUEST_ACCEPTED_IN      = 'fr_ra_in',
    FRIEND_REQUEST_ACCEPTED_OUT     = 'fr_ra_out',
    FRIEND_REQUEST_CANCELED_IN      = 'fr_rc_in',
    FRIEND_REQUEST_CANCELED_OUT     = 'fr_rc_out',

    // Dialogue
    DIALOGUE_CREATED_IN             = 'dlg_c_in',
    DIALOGUE_CREATED_OUT            = 'dlg_c_out',
    DIALOGUE_UPDATED_IN             = 'dlg_u_in',
    DIALOGUE_UPDATED_OUT            = 'dlg_u_out',
    DIALOGUE_DELETED_IN             = 'dlg_d_in',
    DIALOGUE_DELETED_OUT            = 'dlg_d_out',
    DIALOGUE_ARCHIVED_IN            = 'dlg_a_in',
    DIALOGUE_ARCHIVED_OUT           = 'dlg_a_out',

    // Private dialogue
    PRIVATE_DIALOGUE_CREATED_IN     = 'pdlg_c_in',
    PRIVATE_DIALOGUE_CREATED_OUT    = 'pdlg_c_out',
    PRIVATE_DIALOGUE_UPDATED_IN     = 'pdlg_u_in',
    PRIVATE_DIALOGUE_UPDATED_OUT    = 'pdlg_u_out',
    PRIVATE_DIALOGUE_DELETED_IN     = 'pdlg_d_in',
    PRIVATE_DIALOGUE_DELETED_OUT    = 'pdlg_d_out',
    PRIVATE_DIALOGUE_UNDELETED_IN   = 'pdlg_du_in',
    PRIVATE_DIALOGUE_UNDELETED_OUT  = 'pdlg_du_out',
    PRIVATE_DIALOGUE_ARCHIVED_IN    = 'pdlg_a_in',
    PRIVATE_DIALOGUE_ARCHIVED_OUT   = 'pdlg_a_out',
    PRIVATE_DIALOGUE_UNARCHIVED_IN  = 'pdlg_au_in',
    PRIVATE_DIALOGUE_UNARCHIVED_OUT = 'pdlg_au_out',

    // Post
    POST_CREATED_IN                 = 'pt_c_in',
    POST_CREATED_OUT                = 'pt_c_out',
    POST_UPDATED_IN                 = 'pt_u_in',
    POST_UPDATED_OUT                = 'pt_u_out',
    POST_DELETED_IN                 = 'pt_d_in',
    POST_DELETED_OUT                = 'pt_d_out',

    // File
    FILE_UPLOADED_IN                = 'fl_u_in',
    FILE_UPLOADED_OUT               = 'fl_u_out',
    FILE_UPDATED_IN                 = 'fl_upd_in',
    FILE_UPDATED_OUT                = 'fl_upd_out',
    FILE_DELETED_IN                 = 'fl_d_in',
    FILE_DELETED_OUT                = 'fl_d_out',

    // Language
    LANGUAGE_CREATED_IN             = 'lg_c_in',
    LANGUAGE_CREATED_OUT            = 'lg_c_out',
    LANGUAGE_UPDATED_IN             = 'lg_u_in',
    LANGUAGE_UPDATED_OUT            = 'lg_u_out',
    LANGUAGE_DELETED_IN             = 'lg_d_in',
    LANGUAGE_DELETED_OUT            = 'lg_d_out',

    // Language folder
    LANGUAGE_FOLDER_CREATED_IN      = 'lgf_c_in',
    LANGUAGE_FOLDER_CREATED_OUT     = 'lgf_c_out',
    LANGUAGE_FOLDER_UPDATED_IN      = 'lgf_u_in',
    LANGUAGE_FOLDER_UPDATED_OUT     = 'lgf_u_out',
    LANGUAGE_FOLDER_DELETED_IN      = 'lgf_d_in',
    LANGUAGE_FOLDER_DELETED_OUT     = 'lgf_d_out',

    // Language word
    LANGUAGE_WORD_CREATED_IN        = 'lgw_c_in',
    LANGUAGE_WORD_CREATED_OUT       = 'lgw_c_out',
    LANGUAGE_WORD_UPDATED_IN        = 'lgw_u_in',
    LANGUAGE_WORD_UPDATED_OUT       = 'lgw_u_out',
    LANGUAGE_WORD_DELETED_IN        = 'lgw_d_in',
    LANGUAGE_WORD_DELETED_OUT       = 'lgw_d_out',

    // Call
    CALL_OFFER_IN                   = 'ca_o_in',
    CALL_OFFER_OUT                  = 'ca_o_out',
    CALL_ANSWER_IN                  = 'ca_a_in',
    CALL_ANSWER_OUT                 = 'ca_a_out',
    CALL_START_IN                   = 'ca_s_in',
    CALL_START_OUT                  = 'ca_s_out',
    CALL_FINISH_IN                  = 'ca_f_in',
    CALL_FINISH_OUT                 = 'ca_f_out',
}

export type DomainNotification = {
    id: string;
    creationDate: number;
    type: DomainNotificationType;
    viewed: boolean;
    data: unknown;
}

export const isDomainNotification: TypeGuard<DomainNotification> = function (data: unknown): data is DomainNotification {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['data'] === 'undefined' ||

        typeof data['id'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        typeof data['viewed'] !== 'boolean' ||
        typeof data['creationDate'] !== 'number'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotification: TypeAssert<DomainNotification> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotification(data)) {
        throwAssertError(variableName, typeName);
    }
};