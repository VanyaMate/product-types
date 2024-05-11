import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export enum NotificationType {
    CONNECTED               = 'con',
    CONNECTING              = 'cong',
    DISCONNECTED            = 'dis',
    TOKENS_UPDATE           = 'tkn',
    MESSAGE                 = 'msg',
    MESSAGE_DELETED         = 'msg_d',
    MESSAGE_REDACTED        = 'msg_r',
    MESSAGE_READ            = 'msg_read',
    FRIEND_REQUEST          = 'fr_r',
    FRIEND_REQUEST_ACCEPTED = 'fr_ra',
    FRIEND_REQUEST_CANCELED = 'fr_rc',
}

export type DomainNotification = {
    dateMs: number;
    type: NotificationType;
    data: string;
}

export const isDomainNotification: TypeGuard<DomainNotification> = function (data: unknown): data is DomainNotification {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['dateMs'] !== 'number' ||
        typeof data['type'] !== 'string' ||
        typeof data['data'] !== 'string'
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