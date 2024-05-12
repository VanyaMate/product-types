import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainSimpleError = {
    message: string;
}

export const isDomainSimpleError: TypeGuard<DomainSimpleError> = function (data: unknown): data is DomainSimpleError {
    if (!isObject(data)) {
        return false;
    }

    if (typeof data['message'] !== 'string') {
        return false;
    }

    return true;
};

export const assertDomainSimpleError: TypeAssert<DomainSimpleError> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSimpleError(data)) {
        throwAssertError(variableName, typeName);
    }
};