import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainCall, isDomainCall } from '../../../call/DomainCall';


export type DomainNotificationCallFinishData = {
    user: DomainUser;
    call: DomainCall;
}

export const isDomainNotificationCallFinishData: TypeGuard<DomainNotificationCallFinishData> = function (data: unknown): data is DomainNotificationCallFinishData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        !isDomainCall(data['call'])
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