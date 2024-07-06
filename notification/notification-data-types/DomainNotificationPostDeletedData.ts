import { DomainPost, isDomainPost } from '../../post/DomainPost';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainNotificationPostDeletedData = {
    post: DomainPost;
}

export const isDomainNotificationPostDeletedData: TypeGuard<DomainNotificationPostDeletedData> = function (data: unknown): data is DomainNotificationPostDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPost(data['post'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPostDeletedData: TypeAssert<DomainNotificationPostDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};