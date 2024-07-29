import { DomainLanguage, isDomainLanguage } from './DomainLanguage';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import {
    DomainLanguageFolderFull,
    isDomainLanguageFolderFull,
} from './DomainLanguageFolderFull';
import { isArray } from '../_helpers/lib/isArray';


export type DomainLanguageFull = DomainLanguage & {
    folders: DomainLanguageFolderFull;
}

export const isDomainLanguageFull: TypeGuard<DomainLanguageFull> = function (data: unknown): data is DomainLanguageFull {
    if (!isDomainLanguage(data)) {
        return false;
    }

    if (
        !isArray(data['folders'], isDomainLanguageFolderFull)
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageFull: TypeAssert<DomainLanguageFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageFull(data)) {
        throwAssertError(variableName, typeName);
    }
};