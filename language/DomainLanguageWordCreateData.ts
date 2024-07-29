import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isArray } from '../_helpers/lib/isArray';


export type DomainLanguageWordCreateData = {
    original: string;
    translations: Array<string>;
    notice: string;
}

export const isDomainLanguageWordCreateData: TypeGuard<DomainLanguageWordCreateData> = function (data: unknown): data is DomainLanguageWordCreateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['original'] !== 'string' ||
        typeof data['notice'] !== 'string' ||
        !isArray(data['translations'], 'string') ||
        !data['translations'].length
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageWordCreateData: TypeAssert<DomainLanguageWordCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageWordCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};