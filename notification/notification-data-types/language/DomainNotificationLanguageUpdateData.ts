import {
    DomainLanguage,
    isDomainLanguage,
} from '../../../language/DomainLanguage';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationLanguageUpdateData = {
    language: DomainLanguage;
}

export const isDomainNotificationLanguageUpdateData: TypeGuard<DomainNotificationLanguageUpdateData> = function (data: unknown): data is DomainNotificationLanguageUpdateData {
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

export const assertDomainNotificationLanguageUpdateData: TypeAssert<DomainNotificationLanguageUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationLanguageUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};