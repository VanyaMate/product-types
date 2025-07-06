import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainPost, isDomainPost } from '../../../post/DomainPost';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationPostLikedData = {
    post: DomainPost;
    user: DomainUser;
}

export const isDomainNotificationPostLikedData: TypeGuard<DomainNotificationPostLikedData> = function (data: unknown): data is DomainNotificationPostLikedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        isDomainPost(data['post']) &&
        isDomainUser(data['user'])
    ) {
        return true;
    }

    return false;
};

export const assertDomainNotificationPostLikedData: TypeAssert<DomainNotificationPostLikedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostLikedData(data)) {
        throwAssertError(variableName, typeName);
    }
};