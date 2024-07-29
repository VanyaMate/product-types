import { DomainLanguage, isDomainLanguage } from './DomainLanguage';
import {
    DomainLanguageFolder,
    isDomainLanguageFolder,
} from './DomainLanguageFolder';
import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isArray } from '../_helpers/lib/isArray';


export type DomainLanguageWithFolders = DomainLanguage & {
    folders: Array<DomainLanguageFolder>;
}

export const isDomainLanguageWithFolders: TypeGuard<DomainLanguageWithFolders> = function (data: unknown): data is DomainLanguageWithFolders {
    if (!isDomainLanguage(data)) {
        return false;
    }

    if (
        !isArray(data['folders'], isDomainLanguageFolder)
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageWithFolders: TypeAssert<DomainLanguageWithFolders> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageWithFolders(data)) {
        throwAssertError(variableName, typeName);
    }
};