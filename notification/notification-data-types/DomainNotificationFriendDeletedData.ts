import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationFriendDeletedData = {
    user: DomainUser;
}

export const isDomainNotificationFriendDeletedData: TypeGuard<DomainNotificationFriendDeletedData> = function (data: unknown): data is DomainNotificationFriendDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFriendDeletedData: TypeAssert<DomainNotificationFriendDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFriendDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};