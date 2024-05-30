import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export declare enum DomainNotificationType {
    ERROR = "err",
    UNKNOWN = "unk",
    CONNECTED = "con",
    CONNECTING = "cong",
    DISCONNECTED = "dis",
    TOKENS_UPDATE = "tkn",
    USER_MESSAGE = "u_msg",
    USER_MESSAGE_DELETED = "u_msg_d",
    USER_MESSAGE_REDACTED = "u_msg_r",
    USER_MESSAGE_READ = "u_msg_read",
    FRIEND_REQUEST = "fr_r",
    FRIEND_DELETED = "fr_d",
    FRIEND_REQUEST_ACCEPTED = "fr_ra",
    FRIEND_REQUEST_CANCELED = "fr_rc"
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
