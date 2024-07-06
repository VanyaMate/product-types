import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


// IN - получатель
// OUT - не получатель
export enum DomainNotificationType {
    // Common
    ERROR                           = 'err',
    UNKNOWN                         = 'unk',
    CONNECTED                       = 'con',
    CONNECTING                      = 'cong',
    DISCONNECTED                    = 'dis',
    TOKENS_UPDATE                   = 'tkn',

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
}

export type DomainNotification = {
    id: string;
    creationDate: string;
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
        typeof data['creationDate'] !== 'string'
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