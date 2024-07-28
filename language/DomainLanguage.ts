import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguage = {
    id: string;
    title: string;
}

export const isDomainLanguage: TypeGuard<DomainLanguage> = function (data: unknown): data is DomainLanguage {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguage: TypeAssert<DomainLanguage> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguage(data)) {
        throwAssertError(variableName, typeName);
    }
};