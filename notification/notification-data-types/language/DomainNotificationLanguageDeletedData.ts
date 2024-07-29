import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationLanguageDeletedData = {
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageDeletedData: TypeGuard<DomainNotificationLanguageDeletedData> = function (data: unknown): data is DomainNotificationLanguageDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainLanguage(data['language']) ||
        !isDomainUser(data['owner'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationLanguageDeletedData: TypeAssert<DomainNotificationLanguageDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};