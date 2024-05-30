import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainFriends = {
    friends: unknown[];
    requestsOut: unknown[];
    requestsIn: unknown[];
}

export const isDomainFriends: TypeGuard<DomainFriends> = function (data: unknown): data is DomainFriends {
    if (!isObject(data)) {
        return false;
    }

    if (
        !Array.isArray(data['friends']) ||
        !Array.isArray(data['requestsOut']) ||
        !Array.isArray(data['requestsIn'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainFriends: TypeAssert<DomainFriends> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFriends(data)) {
        throwAssertError(variableName, typeName);
    }
};