import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainSearchItem, isDomainSearchItem } from './DomainSearchItem';


export type DomainSearch = {
    profiles?: DomainSearchItem;
}

export const isDomainSearch: TypeGuard<DomainSearch> = function (data: unknown): data is DomainSearch {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['profiles'] !== undefined && !isDomainSearchItem(data['profiles'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainSearch: TypeAssert<DomainSearch> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainSearch(data)) {
        throwAssertError(variableName, typeName);
    }
};