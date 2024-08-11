import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationUserBackgroundUpdateData = {
    user: DomainUser;
    previousBackground: string;
    currentBackground: string;
}

export const isDomainNotificationUserBackgroundUpdateData: TypeGuard<DomainNotificationUserBackgroundUpdateData> = function (data: unknown): data is DomainNotificationUserBackgroundUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        typeof data['previousBackground'] !== 'string' ||
        typeof data['currentBackground'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserBackgroundUpdateData: TypeAssert<DomainNotificationUserBackgroundUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserBackgroundUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};