import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import {
    DomainFriendRequest,
    isDomainFriendRequest,
} from '../../../friends/DomainFriendRequest';


export type DomainNotificationFriendRequestData = DomainFriendRequest;

export const isDomainNotificationFriendRequestData: TypeGuard<DomainNotificationFriendRequestData> = function (data: unknown): data is DomainNotificationFriendRequestData {
    if (!isDomainFriendRequest(data)) {
        return false;
    }

    return true;
};

export const assertDomainNotificationFriendRequestData: TypeAssert<DomainNotificationFriendRequestData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationFriendRequestData(data)) {
        throwAssertError(variableName, typeName);
    }
};