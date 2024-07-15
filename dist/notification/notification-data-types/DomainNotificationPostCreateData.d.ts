import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainPost } from '../../post/DomainPost';
export type DomainNotificationPostCreateData = {
    post: DomainPost;
};
export declare const isDomainNotificationPostCreateData: TypeGuard<DomainNotificationPostCreateData>;
export declare const assertDomainNotificationPostCreateData: TypeAssert<DomainNotificationPostCreateData>;
