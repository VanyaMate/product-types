import { DomainComment } from '../../../comment/DomainComment';
import { DomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentCreateData = {
    post: DomainPost;
    comment: DomainComment;
};
export declare const isDomainNotificationPostCommentCreateData: TypeGuard<DomainNotificationPostCommentCreateData>;
export declare const assertDomainNotificationPostCommentCreateData: TypeAssert<DomainNotificationPostCommentCreateData>;
