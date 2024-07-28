import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainLanguageFolderCreateData = {
    title: string;
}

export const isDomainLanguageFolderCreateData: TypeGuard<DomainLanguageFolderCreateData> = function (data: unknown): data is DomainLanguageFolderCreateData {
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

export const assertDomainLanguageFolderCreateData: TypeAssert<DomainLanguageFolderCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageFolderCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};