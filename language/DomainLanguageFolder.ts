import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageFolder = {
    id: string;
    title: string;
}


export const isDomainLanguageFolder: TypeGuard<DomainLanguageFolder> = function (data: unknown): data is DomainLanguageFolder {
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

export const assertDomainLanguageFolder: TypeAssert<DomainLanguageFolder> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageFolder(data)) {
        throwAssertError(variableName, typeName);
    }
};