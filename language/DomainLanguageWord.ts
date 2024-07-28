import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageWord = {
    id: string;
    original: string;
    translations: Array<string>;
}

export const isDomainLanguageWord: TypeGuard<DomainLanguageWord> = function (data: unknown): data is DomainLanguageWord {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['original'] !== 'string' ||
        !Array.isArray(data['translations']) ||
        !data['translations'].every((translation) => typeof translation === 'string')
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageWord: TypeAssert<DomainLanguageWord> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageWord(data)) {
        throwAssertError(variableName, typeName);
    }
};