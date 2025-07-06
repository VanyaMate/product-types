import { DomainComment } from '../../../comment/DomainComment';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentReplyUpdateData = {
    comment: DomainComment;
    reply: DomainComment;
};
export declare const isDomainNotificationPostCommentReplyUpdateData: TypeGuard<DomainNotificationPostCommentReplyUpdateData>;
export declare const assertDomainNotificationPostCommentReplyUpdateData: TypeAssert<DomainNotificationPostCommentReplyUpdateData>;
