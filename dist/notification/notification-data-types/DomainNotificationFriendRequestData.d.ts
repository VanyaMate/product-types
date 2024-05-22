import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationFriendRequestData = {
    user: DomainUser;
    requestId: string;
    message: string;
};
export declare const isDomainNotificationFriendRequestData: TypeGuard<DomainNotificationFriendRequestData>;
export declare const assertDomainNotificationFriendRequestData: TypeAssert<DomainNotificationFriendRequestData>;
