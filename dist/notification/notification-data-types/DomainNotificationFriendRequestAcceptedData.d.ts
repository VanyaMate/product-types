import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationFriendRequestAcceptedData = {
    from: DomainUser;
};
export declare const isDomainNotificationFriendRequestAcceptedData: TypeGuard<DomainNotificationFriendRequestAcceptedData>;
export declare const assertDomainNotificationFriendRequestAcceptedData: TypeAssert<DomainNotificationFriendRequestAcceptedData>;
