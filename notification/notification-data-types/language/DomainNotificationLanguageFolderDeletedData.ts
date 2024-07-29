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


export type DomainNotificationLanguageFolderDeletedData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageFolderDeletedData: TypeGuard<DomainNotificationLanguageFolderDeletedData> = function (data: unknown): data is DomainNotificationLanguageFolderDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainLanguageFolder(data['folder']) ||
        !isDomainLanguage(data['language']) ||
        !isDomainUser(data['owner'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationLanguageFolderDeletedData: TypeAssert<DomainNotificationLanguageFolderDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageFolderDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};