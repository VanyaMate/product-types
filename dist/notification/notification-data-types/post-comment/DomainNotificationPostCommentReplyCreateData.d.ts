import { DomainComment } from '../../../comment/DomainComment';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationPostCommentReplyCreateData = {
    comment: DomainComment;
    reply: DomainComment;
};
export declare const isDomainNotificationPostCommentReplyCreateData: TypeGuard<DomainNotificationPostCommentReplyCreateData>;
export declare const assertDomainNotificationPostCommentReplyCreateData: TypeAssert<DomainNotificationPostCommentReplyCreateData>;
