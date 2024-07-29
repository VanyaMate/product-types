import {
    DomainLanguageWord,
    isDomainLanguageWord,
} from '../../../language/DomainLanguageWord';
import {
    DomainLanguageFolder,
    isDomainLanguageFolder,
} from '../../../language/DomainLanguageFolder';
import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationLanguageWordDeletedData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageWordDeletedData: TypeGuard<DomainNotificationLanguageWordDeletedData> = function (data: unknown): data is DomainNotificationLanguageWordDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainLanguageWord(data['word']) ||
        !isDomainLanguageFolder(data['folder']) ||
        !isDomainLanguage(data['language']) ||
        !isDomainUser(data['owner'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationLanguageWordDeletedData: TypeAssert<DomainNotificationLanguageWordDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageWordDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};