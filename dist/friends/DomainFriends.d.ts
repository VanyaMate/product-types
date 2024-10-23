import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainFriendRequest } from './DomainFriendRequest';
import { DomainUser } from '../user/DomainUser';
export type DomainFriends = {
    friends: DomainUser[];
    requestsOut: DomainFriendRequest[];
    requestsIn: DomainFriendRequest[];
};
export declare const isDomainFriends: TypeGuard<DomainFriends>;
export declare const assertDomainFriends: TypeAssert<DomainFriends>;
