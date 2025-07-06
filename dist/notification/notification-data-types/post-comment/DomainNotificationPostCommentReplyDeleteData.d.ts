import { DomainComment } from '../../../comment/DomainComment';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentReplyDeleteData = {
    comment: DomainComment;
    reply: DomainComment;
};
export declare const isDomainNotificationPostCommentReplyDeleteData: TypeGuard<DomainNotificationPostCommentReplyDeleteData>;
export declare const assertDomainNotificationPostCommentReplyDeleteData: TypeAssert<DomainNotificationPostCommentReplyDeleteData>;
