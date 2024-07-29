import {
    DomainLanguageFolder,
    isDomainLanguageFolder,
} from '../../../language/DomainLanguageFolder';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';


export type DomainNotificationLanguageFolderUpdateData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
}

export const isDomainNotificationLanguageFolderUpdateData: TypeGuard<DomainNotificationLanguageFolderUpdateData> = function (data: unknown): data is DomainNotificationLanguageFolderUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainLanguageFolder(data['folder']) ||
        !isDomainLanguage(data['language'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationLanguageFolderUpdateData: TypeAssert<DomainNotificationLanguageFolderUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageFolderUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};