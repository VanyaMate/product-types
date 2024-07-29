import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';


export type DomainNotificationLanguageCreateData = {
    language: DomainLanguage;
}

export const isDomainNotificationLanguageCreateData: TypeGuard<DomainNotificationLanguageCreateData> = function (data: unknown): data is DomainNotificationLanguageCreateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainLanguage(data['language'])
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