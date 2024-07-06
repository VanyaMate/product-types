import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainPostUpdateData = {
    message: string;
}

export const isDomainPostUpdateData: TypeGuard<DomainPostUpdateData> = function (data: unknown): data is DomainPostUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainPostUpdateData: TypeAssert<DomainPostUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPostUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};