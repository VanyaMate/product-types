import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationMessageRedactedData = {
    where: DomainUser;
    previousMessage: string;
    newMessage: string;
}

export const isDomainNotificationMessageRedactedData: TypeGuard<DomainNotificationMessageRedactedData> = function (data: unknown): data is DomainNotificationMessageRedactedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['previousMessage'] !== 'string' ||
        typeof data['newMessage'] !== 'string' ||
        !isDomainUser(data['where'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationMessageRedactedData: TypeAssert<DomainNotificationMessageRedactedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationMessageRedactedData(data)) {
        throwAssertError(variableName, typeName);
    }
};