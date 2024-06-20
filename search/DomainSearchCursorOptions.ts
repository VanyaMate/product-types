import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainSearchCursorOptions = {
    query: string;
    cursor: string;
    limit: number;
}

export const isDomainSearchCursorOptions: TypeGuard<DomainSearchCursorOptions> = function (data: unknown): data is DomainSearchCursorOptions {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['query'] !== 'string' ||
        typeof data['cursor'] !== 'string' ||
        typeof data['limit'] !== 'number'
    ) {
        return false;
    }

    return true;
};

export const assertDomainSearchCursorOptions: TypeAssert<DomainSearchCursorOptions> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSearchCursorOptions(data)) {
        throwAssertError(variableName, typeName);
    }
};