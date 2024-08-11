import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationFriendRequestCanceledData = {
    user: DomainUser;
    requestId: string;
}

export const isDomainNotificationFriendRequestCanceledData: TypeGuard<DomainNotificationFriendRequestCanceledData> = function (data: unknown): data is DomainNotificationFriendRequestCanceledData {
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

export const assertDomainNotificationFriendRequestCanceledData: TypeAssert<DomainNotificationFriendRequestCanceledData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFriendRequestCanceledData(data)) {
        throwAssertError(variableName, typeName);
    }
};