import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainCall, isDomainCall } from '../../../call/DomainCall';


export type DomainNotificationCallStartData = {
    user: DomainUser;
    call: DomainCall;
}

export const isDomainNotificationCallStartData: TypeGuard<DomainNotificationCallStartData> = function (data: unknown): data is DomainNotificationCallStartData {
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

export const assertDomainNotificationCallStartData: TypeAssert<DomainNotificationCallStartData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationCallStartData(data)) {
        throwAssertError(variableName, typeName);
    }
};