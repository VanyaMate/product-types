import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageUpdateData = {
    title: string;
}

export const isDomainLanguageUpdateData: TypeGuard<DomainLanguageUpdateData> = function (data: unknown): data is DomainLanguageUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['title'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageUpdateData: TypeAssert<DomainLanguageUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};