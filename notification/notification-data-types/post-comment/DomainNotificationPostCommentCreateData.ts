import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { DomainPost, isDomainPost } from '../../../post/DomainPost';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';


export type DomainNotificationPostCommentCreateData = {
    post: DomainPost;
    comment: DomainComment;
}

export const isDomainNotificationPostCommentCreateData: TypeGuard<DomainNotificationPostCommentCreateData> = function (data: unknown): data is DomainNotificationPostCommentCreateData {
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

export const assertDomainNotificationPostCommentCreateData: TypeAssert<DomainNotificationPostCommentCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};