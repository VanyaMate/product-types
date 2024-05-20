import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';


export type DomainNotificationDisconnectedData = {
    timeMs: number;
    reason: string;
}

export const isDomainNotificationDisconnectedData: TypeGuard<DomainNotificationDisconnectedData> = function (data: unknown): data is DomainNotificationDisconnectedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['timeMs'] !== 'number' ||
        typeof data['reason'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationDisconnectedData: TypeAssert<DomainNotificationDisconnectedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationDisconnectedData(data)) {
        throwAssertError(variableName, typeName);
    }
};