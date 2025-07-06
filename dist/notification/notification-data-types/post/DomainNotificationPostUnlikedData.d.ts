import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPost } from '../../../post/DomainPost';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationPostUnlikedData = {
    post: DomainPost;
    user: DomainUser;
};
export declare const isDomainNotificationPostUnlikedData: TypeGuard<DomainNotificationPostUnlikedData>;
export declare const assertDomainNotificationPostUnlikedData: TypeAssert<DomainNotificationPostUnlikedData>;
