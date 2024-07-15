import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationFriendDeletedData = {
    user: DomainUser;
};
export declare const isDomainNotificationFriendDeletedData: TypeGuard<DomainNotificationFriendDeletedData>;
export declare const assertDomainNotificationFriendDeletedData: TypeAssert<DomainNotificationFriendDeletedData>;
