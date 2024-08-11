import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationUserAvatarUpdateData = {
    newUser: DomainUser;
    oldUser: DomainUser;
}

export const isDomainNotificationUserAvatarUpdateData: TypeGuard<DomainNotificationUserAvatarUpdateData> = function (data: unknown): data is DomainNotificationUserAvatarUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['newUser']) ||
        !isDomainUser(data['oldUser'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserAvatarUpdateData: TypeAssert<DomainNotificationUserAvatarUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserAvatarUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};