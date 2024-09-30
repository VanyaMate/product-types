import { DomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostUpdatedData = {
    previousPost: DomainPost;
    newPost: DomainPost;
};
export declare const isDomainNotificationPostUpdatedData: TypeGuard<DomainNotificationPostUpdatedData>;
export declare const assertDomainNotificationPostUpdatedData: TypeAssert<DomainNotificationPostUpdatedData>;
