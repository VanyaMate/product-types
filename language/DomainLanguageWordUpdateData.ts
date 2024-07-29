import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isOptional } from '../_helpers/lib/isOptional';


export type DomainLanguageWordUpdateData = {
    original?: string;
    translations?: Array<string>;
    notice?: string;
    checked?: boolean;
}

export const isDomainLanguageWordUpdateData: TypeGuard<DomainLanguageWordUpdateData> = function (data: unknown): data is DomainLanguageWordUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isOptional(data['original'], 'string') ||
        !isOptional(data['notice'], 'string') ||
        !isOptional(data['translations'], 'string', true) ||
        !isOptional(data['checked'], 'boolean')
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