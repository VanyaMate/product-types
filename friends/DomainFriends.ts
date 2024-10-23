import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isArray, isObject } from '@vanyamate/types-kit';
import {
    DomainFriendRequest,
    isDomainFriendRequest,
} from './DomainFriendRequest';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainFriends = {
    friends: DomainUser[];
    requestsOut: DomainFriendRequest[];
    requestsIn: DomainFriendRequest[];
}

export const isDomainFriends: TypeGuard<DomainFriends> = function (data: unknown): data is DomainFriends {
    return (
        isObject(data) &&
        isArray(data['friends'], isDomainUser) &&
        isArray(data['requestsOut'], isDomainFriendRequest) &&
        isArray(data['requestsIn'], isDomainFriendRequest)
    );
};

export const assertDomainFriends: TypeAssert<DomainFriends> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFriends(data)) {
        throwAssertError(variableName, typeName);
    }
};