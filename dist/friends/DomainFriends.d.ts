import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUserWithOnline } from '../user/DomainUserWithOnline';
import { DomainUser } from '../user/DomainUser';
export type DomainFriends = {
    friends: DomainUserWithOnline[];
    requestsOut: DomainUser[];
    requestsIn: DomainUser[];
};
export declare const isDomainFriends: TypeGuard<DomainFriends>;
export declare const assertDomainFriends: TypeAssert<DomainFriends>;
