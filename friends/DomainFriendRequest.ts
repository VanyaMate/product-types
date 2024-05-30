import { DomainUser, isDomainUser } from '../user/DomainUser';
import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainFriendRequest = {
    user: DomainUser;
    requestId: string;
    message?: string;
}

export const isDomainFriendRequest: TypeGuard<DomainFriendRequest> = function (data: unknown): data is DomainFriendRequest {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        typeof data['requestId'] !== 'string' ||
        (
            typeof data['message'] !== 'undefined' &&
            typeof data['message'] !== 'string'
        )
    ) {
        return false;
    }

    return true;
};

export const assertDomainFriendRequest: TypeAssert<DomainFriendRequest> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFriendRequest(data)) {
        throwAssertError(variableName, typeName);
    }
};