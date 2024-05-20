import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationMessageData = {
    from: DomainUser;
    message: string;
}

export const isDomainNotificationMessageData: TypeGuard<DomainNotificationMessageData> = function (data: unknown): data is DomainNotificationMessageData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        !isDomainUser(data['from'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationMessageData: TypeAssert<DomainNotificationMessageData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationMessageData(data)) {
        throwAssertError(variableName, typeName);
    }
};