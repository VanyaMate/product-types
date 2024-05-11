import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export declare enum NotificationType {
    CONNECTED = "con",
    CONNECTING = "cong",
    DISCONNECTED = "dis",
    TOKENS_UPDATE = "tkn",
    MESSAGE = "msg",
    MESSAGE_DELETED = "msg_d",
    MESSAGE_REDACTED = "msg_r",
    MESSAGE_READ = "msg_read",
    FRIEND_REQUEST = "fr_r",
    FRIEND_REQUEST_ACCEPTED = "fr_ra",
    FRIEND_REQUEST_CANCELED = "fr_rc"
}
export type DomainNotification = {
    dateMs: number;
    type: NotificationType;
    data: string;
};
export declare const isDomainNotification: TypeGuard<DomainNotification>;
export declare const assertDomainNotification: TypeAssert<DomainNotification>;
