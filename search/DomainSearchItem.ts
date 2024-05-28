import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainSearchItem = {
    list: Array<unknown>,
    count: number;
}

export const isDomainSearchItem: TypeGuard<DomainSearchItem> = function (data: unknown): data is DomainSearchItem {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['count'] !== 'number' ||
        !Array.isArray(data['list'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainSearchItem: TypeAssert<DomainSearchItem> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSearchItem(data)) {
        throwAssertError(variableName, typeName);
    }
};