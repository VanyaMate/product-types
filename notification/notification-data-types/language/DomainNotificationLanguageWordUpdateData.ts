import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
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


export type DomainNotificationLanguageWordUpdateData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageWordUpdateData: TypeGuard<DomainNotificationLanguageWordUpdateData> = function (data: unknown): data is DomainNotificationLanguageWordUpdateData {
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

export const assertDomainNotificationLanguageWordUpdateData: TypeAssert<DomainNotificationLanguageWordUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageWordUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};