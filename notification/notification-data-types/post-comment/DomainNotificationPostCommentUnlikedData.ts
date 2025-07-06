import { DomainComment, isDomainComment } from '../../../comment/DomainComment';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationPostCommentUnlikedData = {
    comment: DomainComment;
    user: DomainUser;
}

export const isDomainNotificationPostCommentUnlikedData: TypeGuard<DomainNotificationPostCommentUnlikedData> = function (data: unknown): data is DomainNotificationPostCommentUnlikedData {
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

export const assertDomainNotificationPostCommentUnlikedData: TypeAssert<DomainNotificationPostCommentUnlikedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCommentUnlikedData(data)) {
        throwAssertError(variableName, typeName);
    }
};