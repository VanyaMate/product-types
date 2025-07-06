import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { DomainPost, isDomainPost } from '../../../post/DomainPost';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';


export type DomainNotificationPostCommentUpdateData = {
    post: DomainPost;
    comment: DomainComment;
}

export const isDomainNotificationPostCommentUpdateData: TypeGuard<DomainNotificationPostCommentUpdateData> = function (data: unknown): data is DomainNotificationPostCommentUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        isDomainPost(data['post']) &&
        isDomainComment(data['comment'])
    ) {
        return true;
    }

    return false;
};

export const assertDomainNotificationPostCommentUpdateData: TypeAssert<DomainNotificationPostCommentUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};