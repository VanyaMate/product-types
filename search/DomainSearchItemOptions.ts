import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainSearchItemOptions = {
    query: string;
    limit: number;
    offset: number;
}

export const isDomainSearchItemOptions: TypeGuard<DomainSearchItemOptions> = function (data: unknown): data is DomainSearchItemOptions {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['query'] !== 'string' ||
        typeof data['limit'] !== 'number' ||
        typeof data['offset'] !== 'number'
    ) {
        return false;
    }

    return true;
};

export const assertDomainSearchItemOptions: TypeAssert<DomainSearchItemOptions> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSearchItemOptions(data)) {
        throwAssertError(variableName, typeName);
    }
};