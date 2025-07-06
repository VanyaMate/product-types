import { DomainComment } from '../../../comment/DomainComment';
import { DomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentUpdateData = {
    post: DomainPost;
    comment: DomainComment;
};
export declare const isDomainNotificationPostCommentUpdateData: TypeGuard<DomainNotificationPostCommentUpdateData>;
export declare const assertDomainNotificationPostCommentUpdateData: TypeAssert<DomainNotificationPostCommentUpdateData>;
