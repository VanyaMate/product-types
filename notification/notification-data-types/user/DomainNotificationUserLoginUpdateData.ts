import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationUserLoginUpdateData = {
    newUser: DomainUser;
    oldUser: DomainUser;
}

export const isDomainNotificationUserLoginUpdateData: TypeGuard<DomainNotificationUserLoginUpdateData> = function (data: unknown): data is DomainNotificationUserLoginUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['newUser']) ||
        !isDomainUser(data['oldUser'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserLoginUpdateData: TypeAssert<DomainNotificationUserLoginUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserLoginUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};