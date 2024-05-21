import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationFriendRequestData = {
    user: DomainUser;
    message: string;
}

export const isDomainNotificationFriendRequestData: TypeGuard<DomainNotificationFriendRequestData> = function (data: unknown): data is DomainNotificationFriendRequestData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        typeof data['message'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFriendRequestData: TypeAssert<DomainNotificationFriendRequestData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFriendRequestData(data)) {
        throwAssertError(variableName, typeName);
    }
};