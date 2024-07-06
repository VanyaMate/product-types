import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainPost, isDomainPost } from '../../post/DomainPost';


export type DomainNotificationPostCreateData = {
    post: DomainPost;
}

export const isDomainNotificationPostCreateData: TypeGuard<DomainNotificationPostCreateData> = function (data: unknown): data is DomainNotificationPostCreateData {
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

export const assertDomainNotificationPostCreateData: TypeAssert<DomainNotificationPostCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};