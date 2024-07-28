import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageFolderUpdateData = {
    title: string;
}

export const isDomainLanguageFolderUpdateData: TypeGuard<DomainLanguageFolderUpdateData> = function (data: unknown): data is DomainLanguageFolderUpdateData {
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

export const assertDomainLanguageFolderUpdateData: TypeAssert<DomainLanguageFolderUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageFolderUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};