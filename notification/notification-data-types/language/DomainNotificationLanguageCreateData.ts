import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';


export type DomainNotificationLanguageCreateData = {
    language: DomainLanguage;
    owner: DomainUser;
}

export const isDomainNotificationLanguageCreateData: TypeGuard<DomainNotificationLanguageCreateData> = function (data: unknown): data is DomainNotificationLanguageCreateData {
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

export const assertDomainNotificationLanguageCreateData: TypeAssert<DomainNotificationLanguageCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};