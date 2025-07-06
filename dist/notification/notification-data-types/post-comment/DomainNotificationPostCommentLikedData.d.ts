import { DomainComment } from '../../../comment/DomainComment';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationPostCommentLikedData = {
    comment: DomainComment;
    user: DomainUser;
};
export declare const isDomainNotificationPostCommentLikedData: TypeGuard<DomainNotificationPostCommentLikedData>;
export declare const assertDomainNotificationPostCommentLikedData: TypeAssert<DomainNotificationPostCommentLikedData>;
