import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationMessageReadData = {
    where: DomainUser;
    messageIndex: number;
}

export const isDomainNotificationMessageReadData: TypeGuard<DomainNotificationMessageReadData> = function (data: unknown): data is DomainNotificationMessageReadData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['messageIndex'] !== 'number' ||
        !isDomainUser(data['where'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationMessageReadData: TypeAssert<DomainNotificationMessageReadData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationMessageReadData(data)) {
        throwAssertError(variableName, typeName);
    }
};