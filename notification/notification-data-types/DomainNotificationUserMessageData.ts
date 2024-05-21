import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainNotificationUserMessageData = {
    user: DomainUser;
    message: string;
}

export const isDomainNotificationUserMessageData: TypeGuard<DomainNotificationUserMessageData> = function (data: unknown): data is DomainNotificationUserMessageData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        !isDomainUser(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageData: TypeAssert<DomainNotificationUserMessageData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageData(data)) {
        throwAssertError(variableName, typeName);
    }
};