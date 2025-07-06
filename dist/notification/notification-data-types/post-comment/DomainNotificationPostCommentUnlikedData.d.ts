import { DomainComment } from '../../../comment/DomainComment';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationPostCommentUnlikedData = {
    comment: DomainComment;
    user: DomainUser;
};
export declare const isDomainNotificationPostCommentUnlikedData: TypeGuard<DomainNotificationPostCommentUnlikedData>;
export declare const assertDomainNotificationPostCommentUnlikedData: TypeAssert<DomainNotificationPostCommentUnlikedData>;
