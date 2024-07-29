import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainLanguageFolder,
    isDomainLanguageFolder,
} from '../../../language/DomainLanguageFolder';
import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationLanguageFolderCreateData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageFolderCreateData: TypeGuard<DomainNotificationLanguageFolderCreateData> = function (data: unknown): data is DomainNotificationLanguageFolderCreateData {
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

export const assertDomainNotificationLanguageFolderCreateData: TypeAssert<DomainNotificationLanguageFolderCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageFolderCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};