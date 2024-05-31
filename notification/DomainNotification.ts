import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


// IN - получатель
// OUT - не получитель
export enum DomainNotificationType {
    ERROR                       = 'err',
    UNKNOWN                     = 'unk',
    CONNECTED                   = 'con',
    CONNECTING                  = 'cong',
    DISCONNECTED                = 'dis',
    TOKENS_UPDATE               = 'tkn',
    USER_MESSAGE_IN             = 'u_msg_in',
    USER_MESSAGE_OUT            = 'u_msg_out',
    USER_MESSAGE_DELETED_IN     = 'u_msg_d_in',
    USER_MESSAGE_DELETED_OUT    = 'u_msg_d_out',
    USER_MESSAGE_REDACTED_IN    = 'u_msg_r_in',
    USER_MESSAGE_REDACTED_OUT   = 'u_msg_r_out',
    USER_MESSAGE_READ_IN        = 'u_msg_read_in',
    USER_MESSAGE_READ_OUT       = 'u_msg_read_out',
    FRIEND_REQUEST_IN           = 'fr_r_in',
    FRIEND_REQUEST_OUT          = 'fr_r_out',
    FRIEND_DELETED_IN           = 'fr_d_in',
    FRIEND_DELETED_OUT          = 'fr_d_out',
    FRIEND_REQUEST_ACCEPTED_IN  = 'fr_ra_in',
    FRIEND_REQUEST_ACCEPTED_OUT = 'fr_ra_out',
    FRIEND_REQUEST_CANCELED_IN  = 'fr_rc_in',
    FRIEND_REQUEST_CANCELED_OUT = 'fr_rc_out',
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
        !(
            typeof data['creationDate'] === 'string' ||
            (
                isObject(data['creationDate']) &&
                typeof data['creationDate']['toUTCString'] === 'function'
            )
        )
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