import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationUserMessageDeletedData = {
    user: DomainUser;
    message: string;
    messageIndex: string;
}

export const isDomainNotificationUserMessageDeletedData: TypeGuard<DomainNotificationUserMessageDeletedData> = function (data: unknown): data is DomainNotificationUserMessageDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        typeof data['messageIndex'] !== 'string' ||
        !isDomainUser(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationUserMessageDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};