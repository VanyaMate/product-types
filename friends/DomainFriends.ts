import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import {
    DomainUserWithOnline,
    isDomainUserWithOnline,
} from '../user/DomainUserWithOnline';
import { DomainUser, isDomainUser } from '../user/DomainUser';
import { isArray, isObject } from '@vanyamate/types-kit';


export type DomainFriends = {
    friends: DomainUserWithOnline[];
    requestsOut: DomainUser[];
    requestsIn: DomainUser[];
}

export const isDomainFriends: TypeGuard<DomainFriends> = function (data: unknown): data is DomainFriends {
    return (
        isObject(data) &&
        isArray(data['friends'], isDomainUserWithOnline) &&
        isArray(data['requestsOut'], isDomainUser) &&
        isArray(data['requestsIn'], isDomainUser)
    );
};

export const assertDomainFriends: TypeAssert<DomainFriends> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFriends(data)) {
        throwAssertError(variableName, typeName);
    }
};