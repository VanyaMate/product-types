import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainFriends = {
    friends: unknown[];
    requestsOut: unknown[];
    requestsIn: unknown[];
};
export declare const isDomainFriends: TypeGuard<DomainFriends>;
export declare const assertDomainFriends: TypeAssert<DomainFriends>;
