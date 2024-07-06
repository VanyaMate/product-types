import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainPostCreateData = {
    message: string;
}

export const isDomainPostCreateData: TypeGuard<DomainPostCreateData> = function (data: unknown): data is DomainPostCreateData {
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

export const assertDomainPostCreateData: TypeAssert<DomainPostCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPostCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};