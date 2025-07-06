import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationPostCommentLikedData = {
    comment: DomainComment;
    user: DomainUser;
}

export const isDomainNotificationPostCommentLikedData: TypeGuard<DomainNotificationPostCommentLikedData> = function (data: unknown): data is DomainNotificationPostCommentLikedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        isDomainUser(data['user']) &&
        isDomainComment(data['comment'])
    ) {
        return true;
    }

    return false;
};

export const assertDomainNotificationPostCommentLikedData: TypeAssert<DomainNotificationPostCommentLikedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentLikedData(data)) {
        throwAssertError(variableName, typeName);
    }
};