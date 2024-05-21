import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationFriendRequestCanceledData = {
    user: DomainUser;
};
export declare const isDomainNotificationFriendRequestCanceledData: TypeGuard<DomainNotificationFriendRequestCanceledData>;
export declare const assertDomainNotificationFriendRequestCanceledData: TypeAssert<DomainNotificationFriendRequestCanceledData>;
