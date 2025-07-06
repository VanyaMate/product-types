import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPost } from '../../../post/DomainPost';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationPostLikedData = {
    post: DomainPost;
    user: DomainUser;
};
export declare const isDomainNotificationPostLikedData: TypeGuard<DomainNotificationPostLikedData>;
export declare const assertDomainNotificationPostLikedData: TypeAssert<DomainNotificationPostLikedData>;
