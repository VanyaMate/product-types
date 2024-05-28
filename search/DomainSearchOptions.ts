import { DomainSearch } from './DomainSearch';
import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainSearchOptions = {
    query: string;
    searchIn: Array<keyof DomainSearch>;
};

export const isDomainSearchOptions: TypeGuard<DomainSearchOptions> = function (data: unknown): data is DomainSearchOptions {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['query'] !== 'string' ||
        !Array.isArray(data['searchIn'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainSearchOptions: TypeAssert<DomainSearchOptions> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSearchOptions(data)) {
        throwAssertError(variableName, typeName);
    }
};