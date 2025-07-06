import { DomainComment } from '../../../comment/DomainComment';
import { DomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentDeleteData = {
    post: DomainPost;
    comment: DomainComment;
};
export declare const isDomainNotificationPostCommentDeleteData: TypeGuard<DomainNotificationPostCommentDeleteData>;
export declare const assertDomainNotificationPostCommentDeleteData: TypeAssert<DomainNotificationPostCommentDeleteData>;
