import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';


export type DomainNotificationPostCommentReplyCreateData = {
    comment: DomainComment;
    reply: DomainComment;
}

export const isDomainNotificationPostCommentReplyCreateData: TypeGuard<DomainNotificationPostCommentReplyCreateData> = function (data: unknown): data is DomainNotificationPostCommentReplyCreateData {
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

export const assertDomainNotificationPostCommentReplyCreateData: TypeAssert<DomainNotificationPostCommentReplyCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentReplyCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};