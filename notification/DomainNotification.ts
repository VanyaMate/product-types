import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export enum DomainNotificationType {
    ERROR                   = 'err',
    UNKNOWN                 = 'unk',
    CONNECTED               = 'con',
    CONNECTING              = 'cong',
    DISCONNECTED            = 'dis',
    TOKENS_UPDATE           = 'tkn',
    USER_MESSAGE            = 'u_msg',
    USER_MESSAGE_DELETED    = 'u_msg_d',
    USER_MESSAGE_REDACTED   = 'u_msg_r',
    USER_MESSAGE_READ       = 'u_msg_read',
    FRIEND_REQUEST          = 'fr_r',
    FRIEND_DELETED          = 'fr_d',
    FRIEND_REQUEST_ACCEPTED = 'fr_ra',
    FRIEND_REQUEST_CANCELED = 'fr_rc',
}

export type DomainNotification = {
    id: string;
    creationDate: string;
    type: DomainNotificationType;
    data: unknown;
}

export const isDomainNotification: TypeGuard<DomainNotification> = function (data: unknown): data is DomainNotification {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] === 'undefined' ||
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