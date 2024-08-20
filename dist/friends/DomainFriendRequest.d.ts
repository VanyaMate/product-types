import { DomainUser } from '../user/DomainUser';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainFriendRequest = {
    user: DomainUser;
    requestId: string;
    message: string;
};
export declare const isDomainFriendRequest: TypeGuard<DomainFriendRequest>;
export declare const assertDomainFriendRequest: TypeAssert<DomainFriendRequest>;
