import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationCallFinishData = {
    user: DomainUser;
}

export const isDomainNotificationCallFinishData: TypeGuard<DomainNotificationCallFinishData> = function (data: unknown): data is DomainNotificationCallFinishData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationCallFinishData: TypeAssert<DomainNotificationCallFinishData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationCallFinishData(data)) {
        throwAssertError(variableName, typeName);
    }
};