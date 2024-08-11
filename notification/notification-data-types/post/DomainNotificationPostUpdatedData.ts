import { DomainPost, isDomainPost } from '../../../post/DomainPost';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationPostUpdatedData = {
    previousPost: DomainPost;
    newPost: DomainPost;
}

export const isDomainNotificationPostUpdatedData: TypeGuard<DomainNotificationPostUpdatedData> = function (data: unknown): data is DomainNotificationPostUpdatedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPost(data['previousPost']) ||
        !isDomainPost(data['newPost'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPostUpdatedData: TypeAssert<DomainNotificationPostUpdatedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPostUpdatedData(data)) {
        throwAssertError(variableName, typeName);
    }
};