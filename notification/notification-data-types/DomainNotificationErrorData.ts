import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { isObject } from '../../_helpers/lib/isObject';
import {
    DomainSimpleError,
    isDomainSimpleError,
} from '../../error/DomainSimpleError';


export type DomainNotificationErrorData = {
    error: DomainSimpleError;
}

export const isDomainNotificationErrorData: TypeGuard<DomainNotificationErrorData> = function (data: unknown): data is DomainNotificationErrorData {
    if (!isObject(data)) {
        return false;
    }

    if (!isDomainSimpleError(data['error'])) {
        return false;
    }

    return true;
};

export const assertDomainNotificationErrorData: TypeAssert<DomainNotificationErrorData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationErrorData(data)) {
        throwAssertError(variableName, typeName);
    }
};