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


export type DomainNotificationLanguageWordCreateData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageWordCreateData: TypeGuard<DomainNotificationLanguageWordCreateData> = function (data: unknown): data is DomainNotificationLanguageWordCreateData {
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

export const assertDomainNotificationLanguageWordCreateData: TypeAssert<DomainNotificationLanguageWordCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageWordCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};