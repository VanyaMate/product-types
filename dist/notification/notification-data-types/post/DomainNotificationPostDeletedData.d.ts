import { DomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostDeletedData = {
    post: DomainPost;
};
export declare const isDomainNotificationPostDeletedData: TypeGuard<DomainNotificationPostDeletedData>;
export declare const assertDomainNotificationPostDeletedData: TypeAssert<DomainNotificationPostDeletedData>;
