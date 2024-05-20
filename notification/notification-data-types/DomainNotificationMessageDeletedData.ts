import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationMessageDeletedData = {
    where: DomainUser;
    message: string;
}

export const isDomainNotificationMessageDeletedData: TypeGuard<DomainNotificationMessageDeletedData> = function (data: unknown): data is DomainNotificationMessageDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        !isDomainUser(data['where'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationMessageDeletedData: TypeAssert<DomainNotificationMessageDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationMessageDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};