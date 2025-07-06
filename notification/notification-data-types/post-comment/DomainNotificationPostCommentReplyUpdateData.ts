import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';


export type DomainNotificationPostCommentReplyUpdateData = {
    comment: DomainComment;
    reply: DomainComment;
}

export const isDomainNotificationPostCommentReplyUpdateData: TypeGuard<DomainNotificationPostCommentReplyUpdateData> = function (data: unknown): data is DomainNotificationPostCommentReplyUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        isDomainComment(data['reply']) &&
        isDomainComment(data['comment'])
    ) {
        return true;
    }

    return false;
};

export const assertDomainNotificationPostCommentReplyUpdateData: TypeAssert<DomainNotificationPostCommentReplyUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentReplyUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};