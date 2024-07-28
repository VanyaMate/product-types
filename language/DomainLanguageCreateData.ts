import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageCreateData = {
    title: string;
}

export const isDomainLanguageCreateData: TypeGuard<DomainLanguageCreateData> = function (data: unknown): data is DomainLanguageCreateData {
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

export const assertDomainLanguageCreateData: TypeAssert<DomainLanguageCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};