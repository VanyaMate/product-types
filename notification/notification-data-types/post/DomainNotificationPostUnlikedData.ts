import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainPost, isDomainPost } from '../../../post/DomainPost';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationPostUnlikedData = {
    post: DomainPost;
    user: DomainUser;
}

export const isDomainNotificationPostUnlikedData: TypeGuard<DomainNotificationPostUnlikedData> = function (data: unknown): data is DomainNotificationPostUnlikedData {
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

export const assertDomainNotificationPostUnlikedData: TypeAssert<DomainNotificationPostUnlikedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostUnlikedData(data)) {
        throwAssertError(variableName, typeName);
    }
};