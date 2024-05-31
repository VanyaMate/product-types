import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationFriendRequestAcceptedData = {
    user: DomainUser;
    requestId: string;
}

export const isDomainNotificationFriendRequestAcceptedData: TypeGuard<DomainNotificationFriendRequestAcceptedData> = function (data: unknown): data is DomainNotificationFriendRequestAcceptedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        typeof data['requestId'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFriendRequestAcceptedData: TypeAssert<DomainNotificationFriendRequestAcceptedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFriendRequestAcceptedData(data)) {
        throwAssertError(variableName, typeName);
    }
};