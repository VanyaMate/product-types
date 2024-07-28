import {
    DomainLanguageFolder,
    isDomainLanguageFolder,
} from './DomainLanguageFolder';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainLanguageWord, isDomainLanguageWord } from './DomainLanguageWord';


export type DomainLanguageFolderFull = DomainLanguageFolder & {
    words: Array<DomainLanguageWord>;
}

export const isDomainLanguageFolderFull: TypeGuard<DomainLanguageFolderFull> = function (data: unknown): data is DomainLanguageFolderFull {
    if (!isDomainLanguageFolder(data)) {
        return false;
    }

    if (
        !Array.isArray(data['words']) ||
        !data['words'].every(isDomainLanguageWord)
    ) {
        return false;
    }

    return true;
};

export const assertDomainLanguageFolderFull: TypeAssert<DomainLanguageFolderFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLanguageFolderFull(data)) {
        throwAssertError(variableName, typeName);
    }
};