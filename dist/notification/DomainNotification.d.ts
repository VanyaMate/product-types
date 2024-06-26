import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export declare enum DomainNotificationType {
    ERROR = "err",
    UNKNOWN = "unk",
    CONNECTED = "con",
    CONNECTING = "cong",
    DISCONNECTED = "dis",
    TOKENS_UPDATE = "tkn",
    USER_MESSAGE_IN = "u_msg_in",
    USER_MESSAGE_OUT = "u_msg_out",
    USER_MESSAGE_DELETED_IN = "u_msg_d_in",
    USER_MESSAGE_DELETED_OUT = "u_msg_d_out",
    USER_MESSAGE_REDACTED_IN = "u_msg_r_in",
    USER_MESSAGE_REDACTED_OUT = "u_msg_r_out",
    USER_MESSAGE_READ_IN = "u_msg_read_in",
    USER_MESSAGE_READ_OUT = "u_msg_read_out",
    PRIVATE_MESSAGE_IN = "p_msg_in",
    PRIVATE_MESSAGE_OUT = "p_msg_out",
    PRIVATE_MESSAGE_DELETED_IN = "p_msg_d_in",
    PRIVATE_MESSAGE_DELETED_OUT = "p_msg_d_out",
    PRIVATE_MESSAGE_REDACTED_IN = "p_msg_r_in",
    PRIVATE_MESSAGE_REDACTED_OUT = "p_msg_r_out",
    PRIVATE_MESSAGE_READ_IN = "p_msg_read_in",
    PRIVATE_MESSAGE_READ_OUT = "p_msg_read_out",
    PRIVATE_MESSAGE_READ_ALL_IN = "p_msg_read_all_in",
    PRIVATE_MESSAGE_READ_ALL_OUT = "p_msg_read_all_out",
    FRIEND_REQUEST_IN = "fr_r_in",
    FRIEND_REQUEST_OUT = "fr_r_out",
    FRIEND_DELETED_IN = "fr_d_in",
    FRIEND_DELETED_OUT = "fr_d_out",
    FRIEND_REQUEST_ACCEPTED_IN = "fr_ra_in",
    FRIEND_REQUEST_ACCEPTED_OUT = "fr_ra_out",
    FRIEND_REQUEST_CANCELED_IN = "fr_rc_in",
    FRIEND_REQUEST_CANCELED_OUT = "fr_rc_out",
    DIALOGUE_CREATED_IN = "dlg_c_in",
    DIALOGUE_CREATED_OUT = "dlg_c_out",
    DIALOGUE_UPDATED_IN = "dlg_u_in",
    DIALOGUE_UPDATED_OUT = "dlg_u_out",
    DIALOGUE_DELETED_IN = "dlg_d_in",
    DIALOGUE_DELETED_OUT = "dlg_d_out",
    DIALOGUE_ARCHIVED_IN = "dlg_a_in",
    DIALOGUE_ARCHIVED_OUT = "dlg_a_out",
    PRIVATE_DIALOGUE_CREATED_IN = "pdlg_c_in",
    PRIVATE_DIALOGUE_CREATED_OUT = "pdlg_c_out",
    PRIVATE_DIALOGUE_UPDATED_IN = "pdlg_u_in",
    PRIVATE_DIALOGUE_UPDATED_OUT = "pdlg_u_out",
    PRIVATE_DIALOGUE_DELETED_IN = "pdlg_d_in",
    PRIVATE_DIALOGUE_DELETED_OUT = "pdlg_d_out",
    PRIVATE_DIALOGUE_UNDELETED_IN = "pdlg_du_in",
    PRIVATE_DIALOGUE_UNDELETED_OUT = "pdlg_du_out",
    PRIVATE_DIALOGUE_ARCHIVED_IN = "pdlg_a_in",
    PRIVATE_DIALOGUE_ARCHIVED_OUT = "pdlg_a_out",
    PRIVATE_DIALOGUE_UNARCHIVED_IN = "pdlg_au_in",
    PRIVATE_DIALOGUE_UNARCHIVED_OUT = "pdlg_au_out"
}
export type DomainNotification = {
    id: string;
    creationDate: string;
    type: DomainNotificationType;
    viewed: boolean;
    data: unknown;
};
export declare const isDomainNotification: TypeGuard<DomainNotification>;
export declare const assertDomainNotification: TypeAssert<DomainNotification>;
