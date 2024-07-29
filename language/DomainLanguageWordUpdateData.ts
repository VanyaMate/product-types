import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageWordUpdateData = {
    original: string;
    translations: Array<string>;
    notice: string;
}

export const isDomainLanguageWordUpdateData: TypeGuard<DomainLanguageWordUpdateData> = function (data: unknown): data is DomainLanguageWordUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['original'] !== 'string' ||
        typeof data['notice'] !== 'string' ||
        !Array.isArray(data['translations']) ||
        !data['translations'].length ||
        !data['translations'].every((word) => typeof word === 'string')
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageWordUpdateData: TypeAssert<DomainLanguageWordUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageWordUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};